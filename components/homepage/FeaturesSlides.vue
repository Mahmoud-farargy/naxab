<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link4.sectionHash : texts.sellers.navLinks.link4.sectionHash" class="features__slides pb-7 pt-10 lg:pb-9 lg:pt-20 mt-5 md:mt-8 lg:mt-14 xl:mt-16 3xl:mt-20 min-h-[400px]">
   
    <div>
      <!-- title -->
      <SectionTitle v-if="global.currentTab === 'customers'"  :inverted="true" :text="texts.customers.head_titles.third.text" :highlighted="texts.customers.head_titles.third.highlight"/>
      <SectionTitle v-else-if="global.currentTab === 'sellers'" :inverted="true" :text="texts.sellers.head_titles.third.text" :highlighted="texts.sellers.head_titles.third.highlight"/>
      <!-- FOR CUSTOMERS -->
      <!-- slides -->
      <Slider v-if="global.currentTab === 'customers'" :featuresList="texts.customers.features_slides"/>
      <div v-else-if="global.currentTab === 'sellers'" class="inner-container">
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 gap-y-1 md:gap-y-0 gap-x-12 facts-list mt-2 sm:mt-8 md:mt-12">
          <li v-for="(factItem, index) in texts.sellers.facts_list" class="text-white font-normal text-[16px] md:text-[18px] lg:text-[19px]" :key="index" v-html="factItem" />
        </ul>
        <div class="flex flex-col max-w-[620px] m-auto items-center w-full text-[16px] sm:text-[18px] md:text-[19px] mt-8 md:mt-7 lg:mt-10">
          <strong class="text-secondary font-bold">{{texts.sellers.joining_invetation.text1}}</strong>
          <div class="text-white font-normal" v-html="texts.sellers.joining_invetation.text2"/>
          <a :href="texts.join_us_button_link" class="bg-secondary decoration-none hover:brightness-125 ease-linear duration-150  mt-8 mb-3 text-[#92278F] font-bold cursor-pointer px-5 py-1.5 md:px-6 md:py-1.5 xl:px-8 xl:py-2 text-center rounded-[12px] text-[17.5px] md:text-[18.5px] lg:text-[19.5px]">
            {{ texts.sellers.joining_invetation.button_text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import Slider from "./Slider.vue";
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.json";
export default {
    data() {
       return{
        texts
       }
    },
    setup() {
        const global = useGlobalStore();
        return {
            global
        };
    },
    components: {
        SectionTitle,
        Slider
    }
}
</script>

<style lang="scss" scoped>
.features__slides{
    background:  transparent linear-gradient(180deg, #92278F 0%, #5C2D91 100%) 0% 0% no-repeat padding-box;
    .facts-list{
      li{
        &::before{
          content: "•";
          color: var(--secondary-color); 
          font-weight: bold;
          display: inline-block;
          width: 27px; 
          height: 27px;
          margin-right: -1em;
          font-size: 2.2rem;
          @media only screen and (max-width: 819px){
            margin-right: 0;
            width: 25px; 
            height: 25px;
          }
        }
      }
    }
}
</style>