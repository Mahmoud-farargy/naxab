<template>
    <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link3.sectionHash : texts.sellers.navLinks.link3.sectionHash" class="section__box">

      <div >     
        <!-- title -->
        <SectionTitle v-if="global.currentTab === 'customers'" :text="texts.customers.head_titles.second.text" :highlighted="texts.customers.head_titles.second.highlight"/>
        <SectionTitle v-else-if="global.currentTab === 'sellers'" :text="texts.sellers.head_titles.second.text" :highlighted="texts.sellers.head_titles.second.highlight"/>
        <!-- Illustrations -->
         <ul class="inner-container flex flex-wrap justify-center px-5 md:px-5 lg:px-0 gap-x-10 gap-y-9 sm:gap-14 lg:gap-y-10 list-none mt-5 md:mt-6 lg:mt-8 xl:mt-11">
          <PointsItem v-for="(item, index) in global.currentTab === 'customers' ? texts.customers.points_illustrations : texts.sellers.points_illustrations" :listLength="global.currentTab === 'customers' ? texts.customers.points_illustrations?.length : texts.sellers.points_illustrations?.length" :index="index" :item="item" :key="index" />
        </ul>
      </div>

    </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import texts from "@/fixtures/texts.js";
import SectionTitle from './SectionTitle.vue';
import PointsItem from "./PointsItem.vue";
export default {
    data(){
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
    PointsItem
  }
}
</script>

<style>

</style>