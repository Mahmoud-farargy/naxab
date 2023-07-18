<template>
  <section class="call__to__action section__box">
    <div :class="`inner-container grid grid-cols-1 ${!global?.isRTL ? 'gap-x-5 md:gap-x-14':''} py-1 sm:py-2 place-items-center sm:place-items-start gap-y-10 sm:text-inherit sm:grid-cols-2`">       
        <!-- statement -->
        <div class="text-[21px] sm:[25px] md:text-[27px] text-center md:text-right lg:text-[29px]" data-aos-duration="1200" data-aos-delay="250" data-aos-once="true" data-aos="fade-up">
            <p class="text-[#000000] font-normal mb-2">{{ $t('call_to_action_text') }}</p>
            <strong @click="router.replace({query: { ...route.query}, hash: '' })" class="font-bold cursor-pointer text-primaryLighter">{{ $t('call_to_action_highlight') }}</strong>
        </div>
        <!-- mobile graphic -->
        <div class="relative mobile__graphic" data-aos-duration="1200" data-aos-delay="250" data-aos-once="true" data-aos="zoom-in">
            <img :src="mobileImg" class="select-none z-[1] object-fit h-auto w-[230px] sm:w-[280px] md:w-[330px] lg:w-[380px] 2xl:w-[450px]" width="400" height="300" :draggable="false" alt=""/>
        </div>

    </div>
  </section>
</template>

<script>
import mobileImg from "@/assets/imgs/mobile-2.png";
import decorationCircleImg from "@/assets/imgs/Ellipse 34.svg";
import texts from "@/fixtures/texts.js";
import { useGlobalStore } from "~/store/Modules/global";

export default {
    setup(){
        const global = useGlobalStore();
        return {
            global,
            router: useRouter(),
            route: useRoute()
        }
    },
    data(){
        return {
            mobileImg,
            texts,
            decorationCircleImg
        }
    }
}
</script>

<style scoped>
    .call__to__action{
        background-image: url(../../assets/imgs/yellow_bg.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>