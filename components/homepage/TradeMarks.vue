<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link5.sectionHash : texts.sellers.navLinks.link5.sectionHash" class="section__box">
    <!-- title -->
    <SectionTitle v-if="global.currentTab === 'customers'" :text="texts.customers.head_titles.fourth.text" :highlighted="texts.customers.head_titles.fourth.highlight"/>
    <SectionTitle v-else-if="global.currentTab === 'sellers'" :text="texts.sellers.head_titles.fourth.text" :highlighted="texts.sellers.head_titles.fourth.highlight"/>

    <!-- For Resellers -  trade marks list -->
    
    <div v-if="global.currentTab === 'customers'" class="inner-container px-5 md:px-5 mt-5 md:mt-6 lg:mt-8 xl:mt-11">
        <swiper
            :space-between="20"
            :speed="800"
            :pagination="{ clickable: true }"
            :navigation="true"
            virtual
            grab-cursor
            :round-lengths="true"
            :breakpoints="{
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    // when window width is >= 320px
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 40
                    }
            }"
            :autoplay="{
                delay: 9000,
                disableOnInteraction: false,
            }"
            :modules="[Autoplay, A11y, Virtual]"
        >
            <swiper-slide v-for="(item, index) in texts.customers.trade_marks" :key="index">
                <TradeMarksItem :item="item"/>
            </swiper-slide>
        </swiper>     
    </div>
    <div v-if="global.currentTab === 'sellers'" class="inner-container">
        sellers will be here
    </div>

  </section>
</template>

<script>
import texts from "@/fixtures/texts.json";
import SectionTitle from './SectionTitle.vue';
import TradeMarksItem from "./TradeMarksItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, A11y, Virtual } from "swiper";
import { useGlobalStore } from "@/store/Modules/global";

export default {
    setup(){
        return {
            Autoplay,
            A11y,
            Virtual,
            global: useGlobalStore()
        }
    },
    data() {
        return {
            texts
        }
    },
    components: {
    SectionTitle,
    TradeMarksItem,
    SwiperSlide,
    Swiper
}
}
</script>

<style lang="scss">


</style>