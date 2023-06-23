<template>
  <div>
    <!-- loaders & modals -->
    <transition name="fade-loader" mode="out-in">
      <Preloader v-if="isAppStarting" />
    </transition>
    <!-- main app -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { Preloader } from "@/components";
useHead({
  bodyAttrs: {
    lang: "ar",
    dir: "rtl",
  },
});
const nuxtApp = useNuxtApp();
const isAppStarting = ref(true);
nuxtApp.hook("page:start", () => {
  isAppStarting.value = true;
});
nuxtApp.hook("page:finish", () => {
  isAppStarting.value = false;
});
</script>