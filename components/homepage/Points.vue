<template>
    <section id="get_points" class="section__box">
      <!-- Illustrations -->

      <!-- FOR CUSTOMERS -->
      <div v-if="global.currentTab === 'customers'">     
        <!-- title -->
        <SectionTitle :text="texts.customers.head_titles.second.text" :highlighted="texts.customers.head_titles.second.highlight"/>
        <ul class="inner-container flex flex-wrap justify-center px-5 md:px-5 lg:px-0 gap-x-10 gap-y-9 sm:gap-14 lg:gap-y-10 list-none mt-5 md:mt-6 lg:mt-8 xl:mt-11">
          <PointsItem v-for="(item, index) in texts.customers.points_illustrations" :index="index" :item="item" :key="index" />
        </ul>
      </div>

    </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import texts from "@/fixtures/texts.json";
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