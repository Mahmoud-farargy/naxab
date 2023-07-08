<template>
  <div>
    <!-- loaders & modals -->
    <transition name="fade-loader" mode="out-in">
      <Preloader v-if="isAppStarting" />
    </transition>
    <!-- main app -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script >
import { Preloader } from "@/components";
import { useLocalStorage,  lowerString } from "./helpers";
import { useGlobalStore } from "@/store/Modules/global";
import { i18nConfig } from "@/helpers/i18nConfig";
import { useI18n } from "vue-i18n";


export default {
  setup() {
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const isAppStarting = ref(true);
    nuxtApp.hook("page:start", () => {
      isAppStarting.value = true;
    });
    nuxtApp.hook("page:finish", function () {
      isAppStarting.value = false;
    });
    const global = useGlobalStore();
    const t = useI18n();
    return {
      global,
      route,
      isAppStarting,
      t
    }
  },
  components: { Preloader },
  methods: {
    changeDirectionLayout(name, lang) {
        const body = document.querySelector("body");
        body.setAttribute("direction", name);
        let html = document.querySelector("html");
        html.setAttribute("dir", name);
        html.setAttribute("lang", lang);
        html.className = name;
      },
    changeLanguage(lang) {
        lang = lowerString(lang);
        const availableLanguages = Object.keys(i18nConfig.messages);
          if(!lang || !availableLanguages.some(lng => lowerString(lng) === lang)){
            return;
          }
          this.t.locale.value = lang;

          if (lang === "ar") {
            this.changeDirectionLayout("rtl", lang);
          } else {
            this.changeDirectionLayout("ltr", lang);
          }
      }
  },
  mounted(){
    // once the app gets initialized
    const localStorageData = useLocalStorage({type: "get"});
    if(!localStorageData){
      useLocalStorage({type: 'reset'});
    }else{
      this.global.updateLocalStorageCopy(localStorageData);
    }
    let lang = localStorageData?.lang;
    
    // sets current language with the lang query if found in the URL
    const langQurery = this.route.query?.lang;
    if(langQurery){
      this.changeLanguage(langQurery);
      useLocalStorage({type: 'set', key: 'lang', value: lowerString(langQurery)});
    }else{
      this.changeLanguage(lang);
    }
    // once a language update occurs in the localStorage
    useLocalStorage(({type: "listener", callBack: (data) => {
      let {lang = "ar" } = data;
      lang = lowerString(lang);
      this.changeLanguage(lang);
    }}));
  }
};
</script>