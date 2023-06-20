<template>
  <div>
    <!-- header -->
    <Header />
    <!-- body -->
    <main class="min-h-[calc(100vh-var(--min-height-header))]"> 
        <slot />
    </main>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    lang: "ar",
    dir: "rtl",
  },
  link: [{ rel: 'icon', type: 'image/png', href: "../assets/imgs/1.png" }]
});
</script>

<style>
</style>