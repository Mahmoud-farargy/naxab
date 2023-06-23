<template>
  <Head>
    <Meta itemprop="thumbnailUrl" :href="siteImg" />
    <Meta property="og:image" itemprop="image" :content="siteImg"/>
    <Meta name="image" :content="siteImg"/>
  </Head>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { siteInfo } from "@/helpers";
import siteImg from "@/assets/imgs/site_img.jpg";
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
      content: props.title || siteInfo.name_ar,
    },
    {
      name: "og:title",
      content: props.title || siteInfo.name_ar,
    },
    {
      name: "og:description",
      content: props.description,
    },
    {
      property: "og:title",
      content: props.title || siteInfo.name_ar,
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