<template>

    <div class="swiper-holder w-[75%] ltr features__slider m-auto relative xl:w-[65%] 2xl:w-[55%]">
      <button
        ref="leftArrow"
        id="go-right"
        class="prev-nav-button absolute ease-linear duration-150 p-2 cursor-pointer top-[50%] translate-y-[-50%] z-[6] right-[-8%] sm:right-[-2%] md:right-[2%] lg:right-[5%] xl:right-[10%]"
        @click="goLeft"
        aria-label="Go right"
        aria-labelledby="Go right"
      >
        <img
          class="w-[22px] md:w-[27px] lg:w-[31px] opacity-80 hover:opacity-100 ease-linear duration-150"
          src="../../assets/imgs/right-arrow.svg"
          alt
          width="31"
          height="50"
        />
      </button>
      <swiper
        :space-between="50"
        :speed="500"
        :pagination="{ clickable: true }"
        :navigation="true"
        virtual
        grab-cursor
        @slide-change="onActiveIndexChange"
        @after-init="onSwiperInit"
       
        :autoplay="{
            delay: 6000,
            disableOnInteraction: false,
          }"
        :modules="[Autoplay, Pagination, Navigation, A11y, Virtual]"
      >
        <swiper-slide v-for="(featureSlide, index) in featuresList" :key="index">
          <div
            class="pt-[10px] md:pt-[37px] lg:pt-[43px] px-[22px] rounded-[29px] flex flex-col items-center gap-[30px]"
          >
            <div class="flex flex-col items-center justify-center gap-5">
                <img
                  class="w-[370px] h-auto object-contain max-h-[450px] lg:max-h-[490px] xl:max-h-[580px]"
                  :src="featureSlide.image"
                  @error="(e) => handleImgError(e)"
                  loading="lazy"
                  width="320"
                  height="320"
                  alt
                />
            </div>
            <p
              class="text-[19px] md:text-[22px] text-center font-normal text-white mt-2 sm:mt-4"
            >{{ $t(featureSlide.descriptionTranslationId) }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <button ref="rightArrow"        
        aria-label="Go left"
        aria-labelledby="Go left"
        id="go-left" class="absolute p-2 cursor-pointer ease-linear duration-150 top-[50%] translate-y-[-50%] z-[6] left-[-8%] sm:left-[-2%] md:left-[2%] lg:left-[5%] xl:left-[10%]" @click="goRight">
        <img
          class="w-[22px] md:w-[27px] lg:w-[31px] opacity-80 hover:opacity-100 ease-linear duration-150"
          src="../../assets/imgs/left-arrow.svg"
          alt
          width="31"
          height="50"
        />
      </button>
    </div>
</template>
    
    <script setup>
const props = defineProps({
  featuresList: Array
});
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y, Virtual } from "swiper";
import "swiper/css";

const img = "/assets/imgs/placeholder.jpg";
const leftArrow = ref(null);
const rightArrow = ref(null);
// Functions
const handleArrows = () => {
    const to_right = document.getElementById("go-right");
    const to_left = document.getElementById("go-left");
    if(!to_left || !to_right){
      return;
    }
    to_right.style.display = "none";
    to_left.style.display = "none";
    if (
      window.innerWidth >= 700 &&
      window.innerWidth <= 1150 &&
      props.featuresList.length > 2
    ) {
      to_right.style.display = "inline-block";
      to_left.style.display = "inline-block";
    }
    if (window.innerWidth < 700 && props.featuresList.length > 1) {
      to_right.style.display = "inline-block";
      to_left.style.display = "inline-block";
    }
    if (window.innerWidth > 1150 && props.featuresList.length > 3) {
      to_right.style.display = "inline-block";
      to_left.style.display = "inline-block";
    }
};

const onActiveIndexChange = event => {
  const { isEnd, isBeginning } = event;

  if (isBeginning) {
      rightArrow.value.classList.add("disabled");
      leftArrow.value.classList.remove("disabled");
    return;
  } else if (isEnd) {
      leftArrow.value.classList.add("disabled");
      rightArrow.value.classList.remove("disabled");
    return;
  }   
  rightArrow.value.classList.remove("disabled");
  leftArrow.value.classList.remove("disabled");
};

const onSwiperInit = event => {
  rightArrow.value.classList.add("disabled");
};
// to replace img when it has an error
const handleImgError = e => {
  e.target.src = img;
  e.onerror = null;
	return true;
};

const goLeft = () => {
  const left = document.getElementsByClassName("features__slider")?.[0]
    .getElementsByClassName("swiper-button-next")?.[0];
  left.click();
};
const goRight = () => {
  const right = document.getElementsByClassName("features__slider")?.[0]
    .getElementsByClassName("swiper-button-prev")?.[0];
  right.click();
};

onMounted(() => {
  handleArrows();
  window.addEventListener("resize", e => {
    handleArrows();
  });
});
</script>
    
    <style>
  .features__slider.ltr{
	direction: ltr;
	text-align: left;
}
.features__slider h3::after {
  content: "";
  position: absolute;
  height: 6px;
  width: 54px;
  background-color: #FFFFFF;
  bottom: -15px;
  left: 0;
  border-radius: 20px;
}
.features__slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: flex-end;
}

.features__slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
  span {
  width: 41px;
  height: 7px;
  background: #FFF 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
}
.features__slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
  span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #FFF000 0% 0% no-repeat padding-box;
}
@media (max-width: 670px) {
  .features__slider
    .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
    span {
    width: 33px;
    height: 8.5px;
  }
}
</style>