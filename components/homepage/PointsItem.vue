<template>
  <li class="point__item flex flex-col">
    <div class="mb-6 md:mb-7 flex justify-center sm:justify-normal lg:mb-7 3xl:mb-8">
        <span class="item__number px-3 flex items-center justify-center text-center w-[38px] h-[38px] md:w-[39px] md:h-[39px] font-normal sm:font-bold text-secondary text-[18px] md:text-[20px] lg:text-[21px] rounded-full">
            {{ index +1 }}
        </span>
    </div>
    <img :draggable="false" :src="item.image" class="object-contain select-none min-w-[216px] h-[220px] sm:h-[224px] xl:w-[255px]" alt=""/>
    <p class="text-[#484848] text-[17px] text-center sm:text-inherit md:text-[19px] font-normal mt-6 md:mt-4">
        {{ item.description }}
    </p>
  </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: () => {}
        },
        index: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.point__item{
    flex: 0 0 16.66%;   
    img{
        max-width: initial;
        @media only screen and (min-width: 780px){
            &:hover{
                animation: tilt-n-move-shaking 0.4s 3 ease-out;
            }
        }
    }
    @media only screen and (max-width: 640px){
        width: 100%;
        justify-content: center;
    }
}
.item__number{
    background: transparent linear-gradient(180deg, #92278F 0%, #5C2D91 100%) 0% 0% no-repeat padding-box;

}
</style>