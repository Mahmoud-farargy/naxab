<template>
  <section
    :id="
      global.currentTab === 'customers'
        ? texts.customers.navLinks.link1.sectionHash
        : texts.sellers.navLinks.link1.sectionHash
    "
    class="pb-6 hero flex mt-[var(--min-height-header)] flex-col pt-7 md:pt-8 lg:pt-9"
  >
    <div
      class="hero__inner flex flex-col items-center text-center justify-center mx-auto w-full h-full"
    >
      <div
        class="px-1 ltr:max-w-[100%] max-w-[89%] mx-auto sm:px-10 lg:px-11 ltr:sm:max-w-[550px] sm:max-w-[550px] min-h-[480px]"
      >
        <!-- tabs -->
        <div class="relative w-full">
          <ul
            id="tabsContainer"
            class="tabs__container flex select-none flex-nowrap items-center w-full"
          >
            <HeroTabItem
              tabId="customers"
              :isActive="global.currentTab === 'customers'"
              :updateTab="updateTab"
              :tabName="$t('hero.tabs_names.first_tab')"
            />
            <HeroTabItem
              tabId="sellers"
              :isActive="global.currentTab === 'sellers'"
              :updateTab="updateTab"
              :tabName="$t('hero.tabs_names.second_tab')"
            />
          </ul>
        </div>
        <!-- intro -->
        <div
          class="text-white text-[17px] sm:text-[19px] md:text-[21px] lg:text-[20px] xl:text-[21px] 3xl:text-[23px]"
        >
          <h1
            class="font-bold mt-10 md:mt-12 mb-2.5 animate__animated animate__bounce animate__delay-2s"
          >
            {{ $t("hero.title") }}
          </h1>

          <Transition name="tab-content" mode="out-in">
            <!-- text for customers -->
            <div v-if="global.currentTab === 'customers'">
              <p
                v-html="$t('hero.customers.text1')"
                class="font-normal mt-1"
              />
              <p
                v-html="$t('hero.customers.text2')"
                class="text-secondary mt-6"
              />
              <!-- customers' container-->
              <div
                class="flex items-center justify-center gap-7 sm:gap-10 lg:gap-16 w-full flex-nowrap mt-3"
              >
                <img
                  :draggable="false"
                  :src="coinsImg"
                  class="object-contain w-[65px] md:w-[79px] lg:w-[69px] 3xl:w-[73px] h-auto"
                  width="69"
                  height="75"
                  alt
                />
                <img
                  :draggable="false"
                  :src="giftImg"
                  class="object-contain w-[80px] md:w-[85px] lg:w-[88px] 3xl:w-[92px] h-auto"
                  width="88"
                  height="75"
                  alt
                />
              </div>
            </div>

            <!-- text for sellers -->
            <div v-else>
              <p
                v-html="$t('hero.sellers.text1')"
                :class="`font-normal ${global?.isRTL ? 'md:font-bold' : ''}`"
              />
              <p
                v-html="$t('hero.sellers.text2')"
                class="text-secondary mt-6"
              />
              <!-- sellers' container-->
              <div>
                <p v-html="$t('hero.sellers.text3')" />
              </div>
            </div>
          </Transition>

          <div
            class="app__links flex items-center justify-center mt-14 flex-wrap gap-2 md:gap-4"
          >
            <a href="#" target="_blank">
              <img
                :draggable="false"
                :src="googleStoreImg"
                width="170"
                height="47"
                class="object-contain hover:shadow-md w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] 3xl:w-[200px] h-auto"
                alt="Google store"
              />
            </a>
            <a href="#" target="_blank">
              <img
                :draggable="false"
                :src="appleStoreImg"
                width="170"
                height="47"
                class="object-contain hover:shadow-md w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] 3xl:w-[200px] h-auto"
                alt="Apple store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- coins image -->
    <div
      class="w-full self-end flex-1 md:flex-auto flex justify-center mt-7 sm:mt-12"
    >
      <img
        :draggable="false"
        :src="HeroCoinsImg"
        class="object-contain px-2 min-w-[180px] w-[270px] sm:w-[280px] md:w-[390px] lg:w-[449px] xl:w-[510px] h-auto"
        :alt="
          global.currentTab === 'customers'
            ? trimText($t('hero.customers.text1'), 155)
            : trimText($t('hero.sellers.text1'), 155)
        "
        width="510"
        height="321"
      />
    </div>
  </section>
</template>

<script>
import { useGlobalStore } from "@/store/Modules/global";
import giftImg from "@/assets/imgs/gift.svg";
import coinsImg from "@/assets/imgs/coins.svg";
import appleStoreImg from "@/assets/imgs/apple-store.svg";
import googleStoreImg from "@/assets/imgs/google-store.svg";
import HeroCoinsImg from "@/assets/imgs/hero-coins.png";
import HeroTabItem from "./HeroTabItem.vue";
import texts from "@/fixtures/texts.js";
import { trimText } from "@/helpers";
export default {
  data() {
    return {
      giftImg,
      coinsImg,
      appleStoreImg,
      googleStoreImg,
      HeroCoinsImg,
      texts,
    };
  },
  setup() {
    const global = useGlobalStore();
    const route = useRoute();
    return {
      global,
      route,
    };
  },
  components: {
    HeroTabItem,
  },
  methods: {
    trimText,
    updateTab(tabId) {
      this.$router.replace({
        path: "/",
        query: { ...this.route.query, tab: tabId },
      });
    },
  },
  watch: {
    "global.currentTab"(val) {
      if (val) {
        const hash = this.route?.hash;
        nextTick(() => {
          if (hash) {
            const element = document.getElementById(hash.replace(/#/, ""));
            if (element) {
              const yOffset =
                -parseInt(
                  getComputedStyle(document.body)?.getPropertyValue(
                    "--min-height-header"
                  )
                ) ?? 80;
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({
                top: y,
                behavior: "smooth",
              });
            }
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 78vh;
  background-image: url(../../assets/imgs/hero-bg-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 680px) {
    min-height: 70vh;
    background-image: url(../../assets/imgs/hero-bg-mobile.svg);
  }
}
</style>