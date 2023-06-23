<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link5.sectionHash : texts.sellers.navLinks.link5.sectionHash" class="section__box">



    <!-- FOR CUSTOMERS - trade marks list -->
        <!-- title -->
    <div v-if="global.currentTab === 'customers'">
        <SectionTitle :text="texts.customers.head_titles.fourth.text" :highlighted="texts.customers.head_titles.fourth.highlight"/>
        <div  class="inner-container px-5 md:px-5 mt-5 md:mt-6 lg:mt-8 xl:mt-11">
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
                        slidesPerView: 2,
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
    </div>

    <!-- FOR SELLERS - features list -->
    <div v-else>
        <div class="inner-container ">    
            <div class="border-primaryLighter border-[3px] md:border-[6px] rounded-[17px] md:rounded-[41px] py-6 px-4 md:py-8 md:lg:px-5 lg:py-12 lg:px-6">
                <!-- title -->
                <SectionTitle class="mt-3 lg:mt-0" :text="texts.sellers.head_titles.fourth.text" :highlighted="texts.sellers.head_titles.fourth.highlight"/>
                <!-- features items -->
                <ul class="list-none grid grid-cols-1 gap-3.5 md:grid-cols-2 mt-5 md:mt-7 lg:mt-8 md:gap-4">
                    <li v-for="(feat, index) in texts.sellers.features" :key="index" class="flex flex-nowrap gap-x-2">
                        <img :src="checkMarkIcon" width="31" height="31" class="object-contain w-[20px] h-[20px] md:w-[31px] md:h-[31px]" alt="" />
                        <p v-html="feat" class="text-[16px] md:text-[18px] lg:text-[19px]"/>
                    </li>
                </ul>
            </div>   

        </div>
    </div>


  </section>
</template>

<script>
import texts from "@/fixtures/texts.js";
import SectionTitle from './SectionTitle.vue';
import TradeMarksItem from "./TradeMarksItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, A11y, Virtual } from "swiper";
import { useGlobalStore } from "@/store/Modules/global";
import checkMarkIcon from "@/assets/imgs/check.svg";

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
            texts,
            checkMarkIcon
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