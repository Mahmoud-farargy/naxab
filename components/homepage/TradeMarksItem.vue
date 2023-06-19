<template>
    <li >
        <div v-if="item.label_Icon">
            <a v-if="item.link" :href="item.link" class="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[190px]">
                <img :src="label_Icon" class="object-contain h-auto w-full" alt=""/>
            </a>
            <span v-else class="w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[190px]">
                <img :src="label_Icon" class="object-contain h-auto w-full" alt=""/>
            </span>
        </div>
        <div
            v-else
            class="bg-[#92278F33] w-[120px] h-[120px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[190px] rounded-[10px]"
        />
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>