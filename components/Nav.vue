<template>
  <nav class="flex header__nav ">
    <ul @click="(e) => onListCLick(e)" class="flex flex-col md:flex-row md:items-center list-none gap-1 md:gap-2 lg:gap-3 w-full">
      <!-- homepage - hero section -->
      <li :class="`nav-item-button ${  activeLink === 'index' ? 'active-view' : ''}`">
        <NuxtLink :href="routesNames.homepage.path" :draggable="false">الرئيسية</NuxtLink>
      </li>
      <!-- about -->
      <li
        class
        :class="`nav-item-button ${  activeLink === routesNames.homepage.hashes.about ? 'active-view' : ''}`"
      >
        <NuxtLink
          :to="{path: routesNames.homepage.path, hash: `#${routesNames.homepage.hashes.about}` }"
          :draggable="false"
        >تعرف علي نكسب</NuxtLink>
      </li>
      <!-- points -->
      <li
        :class="`nav-item-button ${  activeLink === routesNames.homepage.hashes.points ? 'active-view' : ''}`"
      >
        <NuxtLink
          :to="{path: routesNames.homepage.path, hash: `#${routesNames.homepage.hashes.points}` }"
          :draggable="false"
        >رحلات مع النقاط</NuxtLink>
      </li>
      <!-- features -->
      <li
        :class="`nav-item-button ${  activeLink === routesNames.homepage.hashes.features ? 'active-view' : ''}`"
      >
        <NuxtLink
          :to="{path: routesNames.homepage.path, hash: `#${routesNames.homepage.hashes.features}` }"
          :draggable="false"
        >أهم المزايا</NuxtLink>
      </li>
      <!-- trade marks -->
      <li
        class="nav-item-button"
        :class="`nav-item-button ${  activeLink === routesNames.homepage.hashes.marks ? 'active-view' : ''}`"
      >
        <NuxtLink
          :to="{path: routesNames.homepage.path, hash: `#${routesNames.homepage.hashes.marks}` }"
          :draggable="false"
        >العلامات التجارية</NuxtLink>
      </li>
      <!-- contact us -->
      <li
        :class="`nav-item-button ${  activeLink === routesNames.homepage.hashes.contact ? 'active-view' : ''}`"
      >
        <NuxtLink
          :to="{path: routesNames.homepage.path, hash: `#${routesNames.homepage.hashes.contact}` }"
          :draggable="false"
        >تواصل معنا</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routesNames: {
      type: Object,
      required: true,
      default: () => {}
    },
    activeLink: {
      type: String,
      required: true,
      default: "index"
    },
    closeMobileBar: {
      type: Function
    },
    isMobile: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  methods: {

    onListCLick(event){  
        if(!this.isMobile){
           return;
        }
        const tagName = event?.target?.tagName;
        if(tagName == 'LI' || tagName == 'A'){
            this.$nextTick(() => {
                this.closeMobileBar?.();
            });
        }
    }
  }
};
</script>

<style>
</style>