<template>
  <li :class="`nav-item-button ${ isActive ? 'active-view' : ''}`">
    <NuxtLink
      :to="{path, ...(sectionHash && {hash: `#${sectionHash}`})}"
      :draggable="false"
      class="px-2 py-1.5 md:px-2 md:py-1.5 inline-block"
    >{{ title }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    sectionHash: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>