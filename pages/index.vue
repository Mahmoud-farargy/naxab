<template>
  <!-- HOME PAGE -->
  <Page
    :title="texts && texts.seo && texts.seo.title"
    :description="texts && texts.seo && texts.seo.description"
  >
    <!-- intro section -->
    <Hero />
    <!-- about section -->
    <About />
    <!-- points section -->
    <Points />
    <!-- Features slides -->
    <FeaturesSlides />
    <!-- Trade marks -->
    <TradeMarks />
    <!-- Call to action section -->
    <CallToAction />
    <!-- Contact us -->
    <ContactUs />
  </Page>
</template>

<script>
import texts from '@/fixtures/texts.json';
import AOS from 'aos'
import {
  Hero,
  Page,
  About,
  Points,
  FeaturesSlides,
  TradeMarks,
  CallToAction,
  ContactUs
} from "@/components";
import { useGlobalStore } from "@/store/Modules/global";
export default {
  setup() {
    const headersLength = ref(200);
    const global = useGlobalStore();
    const route = useRoute();
    const getIDInView = () => {
      if (route.name !== "index") {
        return;
      }
      const sections = document.querySelectorAll("section[id]");
      let scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.offsetTop - ((headersLength.value || 150) + 200);
        let sectionId = current.getAttribute("id");
        if (
          global.currentTab !== sectionId &&
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          global.updateActiveLinkName?.(sectionId);
        }
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", getIDInView);
      headersLength.value = parseInt(
        getComputedStyle(document.body)?.getPropertyValue("--min-height-header")
      );
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", getIDInView);
    });
    return {
      global,
      route
    };
  },
  data(){
    return {
      texts
    }
  },
  components: {
    Hero,
    Page,
    About,
    Points,
    FeaturesSlides,
    TradeMarks,
    CallToAction,
    ContactUs
  },
  watch: {
    "route.query.tab":{
      immediate: true,
      handler(val){
        if(val && (val === 'customers' || val === 'sellers')){
            // sets current tab in the Pinia store
            this.global?.changeCurrentTab(val);
        }

      }
    },
  },
  mounted(){
    this.$nextTick(() => {
      AOS.init();
    })
  }
};
</script>

<style>
</style>