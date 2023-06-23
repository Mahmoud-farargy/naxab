<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { siteInfo } from "@/helpers";
const props = defineProps({
  title: String,
  seo_title: String,
  description: String,
});

useHead({
  title: `${props.title || siteInfo.name_ar}`,
  meta: [
    {
      name: "name",
      content: props.seo_title,
    },
    {
      name: "og:title",
      content: props.seo_title,
    },
    {
      name: "og:description",
      content: props.description,
    },
    {
      property: "og:title",
      content: props.seo_title,
    },
    {
      property: "og:description",
      content: props.description,
    },
    {
      name: "description",
      content: props.description,
    },
    {
      name: "twitter:description",
      content: props.description,
    },
    {
      name: "twitter:image:alt",
      content: props.description,
    },
  ],
});
</script>

<style>
</style>