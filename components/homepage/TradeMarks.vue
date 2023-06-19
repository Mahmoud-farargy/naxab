<template>
  <section id="trade_marks" class="section__box">
    <!-- title -->
    <SectionTitle :text="texts.customers.head_titles.fourth.text" :highlighted="texts.customers.head_titles.fourth.highlight"/>

    <!-- trade marks list -->
    <!-- <ul class="inner-container flex flex-wrap justify-center px-5 md:px-5 lg:px-0 gap-x-10 gap-y-16 sm:gap-6 list-none mt-5 md:mt-6 lg:mt-8 xl:mt-11">
        <TradeMarksItem v-for="(item, index) in texts.customers.trade_marks" :key="index" :item="item"/>
    </ul> -->
    <div class="inner-container px-5 md:px-5 mt-5 md:mt-6 lg:mt-8 xl:mt-11">
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

  </section>
</template>

<script>
import texts from "@/fixtures/texts.json";
import SectionTitle from './SectionTitle.vue';
import TradeMarksItem from "./TradeMarksItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, A11y, Virtual } from "swiper";

export default {
    setup(){
        return {
            Autoplay,
            A11y,
            Virtual
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