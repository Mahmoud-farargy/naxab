<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link2.sectionHash : texts.sellers.navLinks.link2.sectionHash" class="section__box">

    <div>   
      <!-- title -->
      <SectionTitle v-if="global.currentTab === 'customers'" :text="texts.customers.head_titles.first.text" :highlighted="texts.customers.head_titles.first.highlight"/>
      <SectionTitle v-else-if="global.currentTab === 'sellers'" :text="texts.sellers.head_titles.first.text" :highlighted="texts.sellers.head_titles.first.highlight"/>
      
      <div class="inner-container mt-2 sm:mt-7 md:mt-8 lg:mt-12">
        <!-- FOR CUSTOMERS -->
        <div v-if="global.currentTab === 'customers'">
            <!-- video -->
            <div>
              <!-- ----- replace this image with your video right here ---- -->
              <video v-if="texts.customers.about.video_url" :src="texts.customers.about.video_url" :autoplay="false" playsinline controls class="object-contain w-full h-auto min-w-[215px]" />
              <img v-else :src="videoPlaceholder" :draggable="false" class="object-contain w-full min-w-[215px] h-auto" width="850" alt="" />
            </div>
            <!-- description -->
            <div class="text-[16px] sm:text-[18px] lg:text-[19px] 3xl:text-[22px] font-normal text-[#484848] mt-5">
              <!-- shows full description -->
              <div v-if="isFullDescriptionShown" v-html="texts.customers.about.description"/>
              <!-- shows a snippet of the description -->
              <div v-else v-html="trimText(texts.customers.about.description, descriptionCharactersLimit)"/>
            </div>
        </div>
        <!-- FOR SELLERS -->
        <div v-if="global.currentTab === 'sellers'">
            <!-- video -->
            <div>
              <!-- ----- replace this image with your video right here ---- -->
              <video v-if="texts.sellers.about.video_url" :src="texts.sellers.about.video_url" :autoplay="false" playsinline controls class="object-contain w-full h-auto min-w-[215px]" />
              <img v-else :src="videoPlaceholder" :draggable="false" class="object-contain w-full min-w-[215px] h-auto" width="850" alt="" />
            </div>
            <!-- description -->
            <div  class="text-[16px] sm:text-[18px] lg:text-[19px] 3xl:text-[22px] font-normal text-[#484848] mt-5">
              <!-- shows full description -->
              <div v-if="isFullDescriptionShown" v-html="texts.sellers.about.description"/>
              <!-- shows a snippet of the description -->
              <div  v-else v-html="trimText(texts.sellers.about.description, descriptionCharactersLimit)"/>
            </div>
        </div>
        <!-- toggles description length visibility -->
        <div v-if="(global.currentTab === 'customers' ? parseInt(texts.customers.about.description.length) : parseInt(texts.sellers.about.description.length)) > descriptionCharactersLimit" class="flex items-center justify-end mt-4 sm:mt-6 md:mt-7">
          <button @click="() => isFullDescriptionShown = true" v-if="!isFullDescriptionShown" class="hightlighted__button primary__button">المزيد</button>
          <button @click="() => isFullDescriptionShown = false" v-else class="primary__button hover:bg-[primaryLighter]/80 ease-linear duration-150">اقل</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import videoPlaceholder from "@/assets/imgs/video.svg";
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.json";
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