<template>
    <div class="flex justify-center text-center">
      <div class="title--divider text-center flex mb-5">
        <span :class="`title--divider--start ${inverted ? 'bg-secondary' :'bg-[#92278F]'}`"></span>
        <strong
          :class="`${inverted ? 'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle ltr:mx-[0.4rem] mx-[1rem]  ltr:sm:mx-[1.5rem] sm:mx-[1.5rem] md:mx-[1.6rem] lg:mx-[1.8rem] 3xl:mx-[3rem] ltr:text-[19px] text-[20.5px] ltr:md:text-[20px]  ltr:lg:text-[26px] md:text-[20px] lg:text-[26px] ltr:3xl:text-[30px] 3xl:text-[30px] text-bold`"
        >
        {{ text }}
          <span :class="`${inverted ? 'text-secondary' :'text-[#92278F]'}`">{{highlighted}}</span>
        </strong>
        <span :class="`title--divider--end ${inverted ? 'bg-secondary' :'bg-[#92278F]'}`"></span>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type: String,
            required: true,
            default: ""
        },
        highlighted:{
            type: String,
            required: true,
            default: ""
        },
        inverted:{
          type: Boolean,
          default: false
        }
    }
}
</script>

<style>

</style>