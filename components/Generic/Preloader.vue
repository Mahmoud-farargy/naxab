<template>
        <div
        class="fixed h-screen opacity-100 top-0 left-0 right-0 bottom-0 z-50 bg-[#FFF]"
      >
        <div class="flex justify-center items-center w-full h-full">
          <img class="object-contain" width="200" height="200" src="../../assets/animations/animation_200_lj8nusaf_compressed.gif" alt="loading Naxab... Please wait"
          />
        </div>
      </div>
</template>

<script setup>
onMounted(() =>{
    document.body.style.overflowY = 'hidden';
});
onBeforeUnmount(() => {
    document.body.style.overflowY = 'auto';
});
</script>

<style>

</style>