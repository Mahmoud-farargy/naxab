<template>
    <div>
       <slot />
    </div>
</template>

<script setup>
import { siteInfo } from "@/helpers";
const props = defineProps({
  title: String,
  description: String
});

useHead({
  title: `${
    props.title || siteInfo.name_ar
  }`,
  meta: [
    {
      name: 'description',
      content: props.description
    }
  ]
});
</script>

<style>

</style>