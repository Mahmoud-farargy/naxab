<template>
  <section id="index" class="pb-6 flex mt-[var(--min-height-header)] flex-col pt-7 md:pt-8 lg:pt-9">
    <div
      class="hero__inner flex flex-col items-center text-center justify-center mx-auto w-full h-full"
    >
      <div class="px-6 sm:px-10 lg:px-11 max-w-[550px] min-h-[480px]">
        <!-- tabs -->
        <div class="relative w-full">
          <ul
            id="tabsContainer"
            class="tabs__container flex select-none flex-nowrap items-center w-full"
          >
            <HeroTabItem
              tabId="customers"
              :isActive="global.currentTab === 'customers'"
              :setTabInStore="setTabInStore"
              :tabName="texts.tabs_names.first_tab"
            />
            <HeroTabItem
              tabId="sellers"
              :isActive="global.currentTab === 'sellers'"
              :setTabInStore="setTabInStore"
              :tabName="texts.tabs_names.second_tab"
            />
          </ul>
        </div>
        <!-- intro -->
        <div
          class="text-white text-[17px] sm:text-[19px] md:text-[21px] lg:text-[20px] xl:text-[21px] 3xl:text-[23px]"
        >
          <h2 class="font-bold mt-10 md:mt-12 animate__animated animate__bounce animate__delay-0.8s">التطبيق الأول</h2>
          <!-- text for customers -->
          <p v-if="global.currentTab === 'customers'" class="font-normal mt-1">
            الذي يمكنك من الاستفادة من العروض
            <br />والخصومات المقدمة من المتاجر والعلامات التجارية
          </p>
          <!-- text for resellers -->
          <p
            v-else-if="global.currentTab === 'sellers'"
          >التطبيق الأول الذي يمكن عـــــمــــلائـــــك من الاسـتـفــــادة من العروض والـخــصــــومـــات التي تقدمها لهم وتحويلها إلى نـقـــــاط ومكافئات تمنحها لهم لتعزيز ولائهم لعلامتك التجارية</p>
          <!-- text for customers -->
          <p
            v-if="global.currentTab === 'customers'"
            class="text-secondary mt-6"
          >وتجميع النقاط .. وكسب المكافئات</p>
          <!-- text for resellers -->
          <p
            v-else-if="global.currentTab === 'sellers'"
            class="text-secondary mt-6"
          >نكسب .. حافظ على عملائك الحاليين</p>

          <!-- container for customers -->
          <div
            v-if="global.currentTab === 'customers'"
            class="flex items-center justify-center gap-7 sm:gap-10 lg:gap-16 w-full flex-nowrap mt-3"
          >
            <img
              :draggable="false"
              :src="coinsImg"
              class="object-contain w-[65px] md:w-[79px] lg:w-[69px] 3xl:w-[73px] h-auto"
              width="69"
              alt
            />
            <img
              :draggable="false"
              :src="giftImg"
              class="object-contain w-[80px] md:w-[85px] lg:w-[88px] 3xl:w-[92px] h-auto"
              width="88"
              alt
            />
          </div>
          <!-- container for resellers -->
          <div v-else-if="global.currentTab === 'sellers'">
            <p>واكسب عملاء جدد</p>
          </div>

          <div class="app__links flex items-center justify-center mt-14 flex-wrap gap-2 md:gap-4">
            <a href="#" target="_blank">
              <img
                :draggable="false"
                :src="appleStoreImg"
                width="220"
                class="object-contain hover:shadow-md w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] 3xl:w-[200px] h-auto"
                alt="Apple store"
              />
            </a>
            <a href="#" target="_blank">
              <img
                :draggable="false"
                :src="googleStoreImg"
                width="220"
                class="object-contain hover:shadow-md w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] 3xl:w-[200px] h-auto"
                alt="Google store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- coins image -->
    <div class="w-full self-end flex-1 md:flex-auto flex justify-center mt-7 sm:mt-12">
      <img
        :draggable="false"
        :src="HeroCoinsImg"
        class="object-contain px-2 min-w-[180px] w-[270px] sm:w-[280px] md:w-[390px] lg:w-[449px] xl:w-[510px] h-auto"
        alt
        width="510"
      />
    </div>
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import giftImg from "@/assets/imgs/gift.svg";
import coinsImg from "@/assets/imgs/coins.svg";
import appleStoreImg from "@/assets/imgs/apple-store.svg";
import googleStoreImg from "@/assets/imgs/google-store.svg";
import HeroCoinsImg from "@/assets/imgs/hero-coins.png";
import HeroTabItem from "./HeroTabItem.vue";
import texts from "@/fixtures/texts.json";
export default {
  data() {
    return {
      giftImg,
      coinsImg,
      appleStoreImg,
      googleStoreImg,
      HeroCoinsImg,
      texts
    };
  },
  setup() {
    const global = useGlobalStore();
    return {
      global
    };
  },
  components: {
    HeroTabItem
  },

  methods: {
    setTabInStore(tabId) {
      // sets current tab in the Pinia store
      this.global?.changeCurrentTab(tabId);
    }
  }
};
</script>

<style lang="scss" scoped>
#index {
  min-height: 78vh;
  background-image: url(../../assets/imgs/hero-bg-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 680px) {
    background-image: url(../../assets/imgs/hero-bg-mobile.svg);
  }
}

</style>