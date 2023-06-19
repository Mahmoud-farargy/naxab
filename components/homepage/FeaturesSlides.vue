<template>
  <section id="features" class="features__slides pb-7 pt-10 lg:pb-9 lg:pt-20 mt-5 md:mt-8 lg:mt-14 xl:mt-16 3xl:mt-20 min-h-[400px]">
    <!-- FOR CUSTOMERS -->
    <div v-if="global.currentTab === 'customers'">
      <!-- title -->
      <SectionTitle :inverted="true" :text="texts.customers.head_titles.third.text" :highlighted="texts.customers.head_titles.third.highlight"/>
      <!-- slides -->
      <Slider :featuresList="texts.customers.features_slides"/>
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
    
}
</style>