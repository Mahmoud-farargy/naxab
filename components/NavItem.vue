<template>
  <li :class="`nav-item-button ${ isActive ? 'active-view' : ''}`">
    <NuxtLink
      :to="{path, ...((sectionHash && sectionHash !== 'index') && {hash: `#${sectionHash}`}), ...(query && {query})}"
      :draggable="false"
      class="px-2.5 py-1.5 md:px-2 md:py-1.5 inline-block w-full capitalize"
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
    },
    query: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
</style>