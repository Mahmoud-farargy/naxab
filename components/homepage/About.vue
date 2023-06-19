<template>
  <section id="about_naxab" class="section__box">

    <!-- FOR CUSTOMERS -->
    <div v-if="global.currentTab === 'customers'">   
      <!-- title -->
      <SectionTitle :text="texts.customers.head_titles.first.text" :highlighted="texts.customers.head_titles.first.highlight"/>
      <!-- video -->
      <div class="inner-container mt-2 sm:mt-7 md:mt-8 lg:mt-12">
        <div>
          <!-- ----- replace this image with your video right here ---- -->
          <video v-if="texts.customers.about.video_url" :src="texts.customers.about.video_url" :autoplay="false" playsinline controls class="object-contain w-full h-auto min-w-[215px]" />
          <img v-else :src="videoPlaceholder" :draggable="false" class="object-contain w-full min-w-[215px] h-auto" width="850" alt="" />
        </div>
        <!-- description -->
        <div class="text-[17px] sm:text-[18px] lg:text-[19px] 3xl:text-[22px] font-normal text-[#484848] mt-5">
          {{ texts.customers.about.description }}
        </div>
        <div class="flex items-center justify-end mt-4 sm:mt-6 md:mt-7">
          <button class="hightlighted__button primary__button">المزيد</button>
          <button class="primary__button hover:bg-[primaryLighter]/80 ease-linear duration-150">اقل</button>
        </div>
      </div>
    </div>

    <!-- FOR SELLERS -->
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import videoPlaceholder from "@/assets/imgs/video.svg";
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.json";
export default {
  data() {
    return {
      texts,
      videoPlaceholder
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
  }
};
</script>

<style>
</style>