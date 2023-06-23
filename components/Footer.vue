<template>
    <footer class="bg-[#191919] w-full text-[14px] flex-wrap sm:text-[16px] md:text-[17px] lg:text-[18px] flex items-center justify-center gap-2 py-3 px-2 text-center text-white">
       <span>{{ texts.footer_copyright.text }}</span><span class="uppercase">© Naxab {{ currentYear }}</span>
    </footer>
</template>

<script>
import texts from "@/fixtures/texts.js";
export default {
    data(){
        return {
            texts,
            currentYear: "2023"
        }
    },
    mounted(){
        this.currentYear = new Date().getFullYear();
    }
}
</script>

<style>

</style>