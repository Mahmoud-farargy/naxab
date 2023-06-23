<template>
  <section class="call__to__action section__box">
    <div class="inner-container grid grid-cols-1 py-1 sm:py-2 place-items-center sm:place-items-start gap-y-10 sm:text-inherit sm:grid-cols-2">       
        <!-- statement -->
        <div class="text-[21px] sm:[25px] md:text-[27px] text-center md:text-right lg:text-[29px]" data-aos-duration="1200" data-aos-delay="250" data-aos-once="true" data-aos="fade-left">
            <p class="text-[#000000] font-normal mb-2">{{ texts.call_to_action.text }}</p>
            <strong class="font-bold text-primaryLighter">{{ texts.call_to_action.highlight }}</strong>
        </div>
        <!-- mobile graphic -->
        <div class="relative mobile__graphic" data-aos-duration="1200" data-aos-delay="250" data-aos-once="true" data-aos="zoom-in">
            <img :src="mobileImg" class="select-none z-[1] object-fit h-auto w-[230px] sm:w-[280px] md:w-[330px] lg:w-[380px] 2xl:w-[450px]" width="400" :draggable="false" alt=""/>
        </div>

    </div>
  </section>
</template>

<script>
import mobileImg from "@/assets/imgs/mobile-2.png";
import decorationCircleImg from "@/assets/imgs/Ellipse 34.svg";
import texts from "@/fixtures/texts.js";
export default {
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