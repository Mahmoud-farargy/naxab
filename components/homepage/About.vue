<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link2.sectionHash : texts.sellers.navLinks.link2.sectionHash" class="section__box">

    <div>   
      <!-- title -->
      <SectionTitle v-if="global.currentTab === 'customers'" :text="$t('head_titles.customers.first.text')" :highlighted="$t('head_titles.customers.first.highlight')"/>
      <SectionTitle v-else-if="global.currentTab === 'sellers'" :text="$t('head_titles.sellers.first.text')" :highlighted="$t('head_titles.sellers.first.highlight')"/>
      
      <div class="inner-container mt-2 sm:mt-7 md:mt-8 lg:mt-12">
        <!-- FOR CUSTOMERS -->
        <div v-if="global.currentTab === 'customers'">
            <!-- video -->
            <div>
              <!-- ----- replace this image with your video right here ---- -->
              <video v-if="texts.customers.about.video_url" :src="texts.customers.about.video_url" :autoplay="false" playsinline controls class="object-contain w-full h-auto min-w-[215px]" />
              <img v-else :src="videoPlaceholder" :draggable="false" class="object-contain select-none w-full min-w-[215px] h-auto" width="850" height="534" alt="" />
            </div>
            <!-- description -->
            <div class="text-[16px] sm:text-[18px] lg:text-[19px] 3xl:text-[22px] font-normal text-[#484848] mt-5">
              <!-- shows full description -->
              <div v-if="isFullDescriptionShown" class="whitespace-pre-line break-words" v-html="global.localStorageCopy?.lang === 'ar' ? texts.customers.about.description_ar : texts.customers.about.description_en"/>
              <!-- shows a snippet of the description -->
              <div v-else v-html="trimText(global.localStorageCopy?.lang === 'ar' ? texts.customers.about.description_ar : texts.customers.about.description_en , descriptionCharactersLimit)"/>
            </div>
        </div>
        <!-- FOR SELLERS -->
        <div v-if="global.currentTab === 'sellers'">
            <!-- video -->
            <div>
              <!-- ----- replace this image with your video right here ---- -->
              <video v-if="texts.sellers.about.video_url" :src="texts.sellers.about.video_url" :autoplay="false" playsinline controls class="object-contain w-full h-auto min-w-[215px]" />
              <img v-else :src="videoPlaceholder" :draggable="false" class="object-contain select-none w-full min-w-[215px] h-auto" width="850" height="534" alt="" />
            </div>
            <!-- description -->
            <div  class="text-[16px] sm:text-[18px] lg:text-[19px] 3xl:text-[22px] font-normal text-[#484848] mt-5">
              <!-- shows full description -->
              <div v-if="isFullDescriptionShown" class="whitespace-pre-line break-words" v-html="global.localStorageCopy?.lang === 'ar' ? texts.sellers.about.description_ar : texts.sellers.about.description_en"/>
              <!-- shows a snippet of the description -->
              <div  v-else v-html="trimText(global.localStorageCopy?.lang === 'ar' ? texts.sellers.about.description_ar : texts.sellers.about.description_en , descriptionCharactersLimit)"/>
            </div>
        </div>
        <!-- toggles description length visibility -->
        <div v-if="(global.currentTab === 'customers' ? parseInt(`${global.localStorageCopy?.lang === 'ar'  ? texts.customers.about.description_ar?.length : texts.customers.about.description_en?.length}`) : parseInt( global.localStorageCopy?.lang === 'ar'  ? texts.sellers.about.description_ar?.length : texts.sellers.about.description_en?.length)) > descriptionCharactersLimit" class="flex items-center justify-end mt-4 sm:mt-6 md:mt-7">
          <button @click="() => isFullDescriptionShown = !isFullDescriptionShown" class="hightlighted__button primary__button flex items-center gap-2 active:brightness-150">
            <span v-if="!isFullDescriptionShown">{{ $t("more")}}</span>
            <span v-else>{{ $t("less")}}</span>
            <svg :style="{transform: isFullDescriptionShown ? 'rotate(180deg)' : 'rotate(0)'}" class="ease-linear duration-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import videoPlaceholder from "@/assets/imgs/video.svg";
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.js";
import { trimText } from "@/helpers";
export default {
  data() {
    return {
      texts,
      videoPlaceholder,
      isFullDescriptionShown: false,
      descriptionCharactersLimit: 320
    };
  },
  setup() {
    const global = useGlobalStore();
    return {
      global
    };
  },
  components: {
    SectionTitle
  },
  methods: {
    trimText
  },
  watch:{
    "global.currentTab"(val){
      if(val){
        this.isFullDescriptionShown = false;
      }
    }
  }
};
</script>

<style>
</style>