<template>
  <section id="contact_us" class="bg-[#343434] pb-0 pt-20 md:py-20 lg:py-24 py px-0 text-[#FFFFFF]">    
    <div class="inner-container px-0 md:px-7 lg:px-1">
       
        <div class="flex flex-wrap gap-y-10 gap-x-16">
          <div class="md:basis-[45%] basis-full w-full sm:w-[350px] md:w-[400px] lg:w-[450px] py-0 md:py-5 lg:py-6 xl:py-7">
              <!-- contact us - title -->
              <div class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-10 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] lg:mx-[1.8rem] 3xl:mx-[3rem] text-[18.5px] md:text-[19px] lg:text-[24px] 3xl:text-[25px] text-bold`"
                    >
                    {{ texts.customers.head_titles.fifth.text }}
                      <span class="text-secondary">{{texts.customers.head_titles.fifth.highlight}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <!-- contact us form -->
              <form class="px-4">
                <!-- name input -->
                <FormInput                    
                        elementType="input"
                        inputType="text"
                        label="الاسم"
                        v-model="formState.name"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :validationObj="v$.formState && v$.formState.name"
                        :isRequired="true"
                        placeholder="أدخل اسمك"
                        invalidMsg="هذه الخانة مطلوبة" />
                <!-- phone input -->
                <FormInput                    
                        elementType="input"
                        inputType="text"
                        label="رقم الهاتف"
                        v-model="formState.phone"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :validationObj="v$.formState && v$.formState.phone"
                        :isRequired="true"
                        placeholder="201003211503"
                        invalidMsg="هذه الخانة مطلوبة" />
              <!-- message input -->
              <FormInput                    
                        elementType="textarea"
                        inputType="text"
                        label="الرسالة"
                        v-model="formState.message"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :validationObj="v$.formState && v$.formState.message"
                        :isRequired="true"
                        placeholder="اكتب رسالتك"
                        invalidMsg="هذه الخانة مطلوبة" />
              <input
                type="submit"
                value="إرسال"
                class="w-full py-3 px-4 font-bold cursor-pointer rounded-[10px] text-[16px] lg:text-[17px] 3xl:[19px] text-secondary submit__button"
              />
              </form>
          </div>

          <!-- getting in touch -->
          <div class="bg-[#272727] flex flex-col items-center md:bg-transparent pt-8 pb-9 md:pt-0 md:pb-0 basis-full w-full md:basis-[45%] sm:w-auto">
            <!-- logo -->
            <div class="mb-8 md:mb-10 lg:mb-16">
              <img :draggable="false" :src="logoImg" class="object-contain w-[96px] sm:w-[102px] md:w-[120px] lg:w-[123px] 3xl:w-[138px]" alt=""/>
            </div>
              <!-- app store links on mobile view -->
              <div class="store__links md:hidden flex items-center mb-7 gap-3">
                <a :href="texts.customers.links.app_links.apple_store">
                  <img :draggable="false" :src="appleStoreImg" class="object-contain w-[115px] sm:w-[121px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Apple store"/>
                </a>
                <a :href="texts.customers.links.app_links.google_store">
                  <img :draggable="false" :src="googleStoreImg" class="object-contain w-[115px] sm:w-[121px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Google store"/>
                </a>
              </div>
            <!-- follow us - title -->
            <div class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-9 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] lg:mx-[1.8rem] 3xl:mx-[3rem] text-[18.5px] md:text-[19px] lg:text-[24px] 3xl:text-[25px] text-bold`"
                    >
                    {{ texts.customers.head_titles.sixth.text }}
                      <span class="text-secondary">{{texts.customers.head_titles.sixth.highlight}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <!-- social links -->
              <div class="socials flex items-center gap-4 lg:gap-5 3xl:gap-6 mb-0 md:mb-9">
                  <a :href="texts.customers.links.socials.twitter">
                    <img :draggable="false" :src="twitterImg" class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our twitter page"/>
                  </a>
                  <a :href="texts.customers.links.socials.snapchat">
                    <img :draggable="false" :src="snapchatImg" class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our snapchat page"/>
                  </a>
                  <a :href="texts.customers.links.socials.facebook">
                    <img :draggable="false" :src="facebookImg" class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our facebook page"/>
                  </a>
                  <a :href="texts.customers.links.socials.instagram">
                    <img :draggable="false" :src="instagramImg" class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our instagram page"/>
                  </a>
              </div>
              <!-- app store links -->
              <div class="store__links hidden md:flex items-center gap-3">
                <a :href="texts.customers.links.app_links.apple_store">
                  <img :draggable="false" :src="appleStoreImg" class="object-contain w-[111px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Apple store"/>
                </a>
                <a :href="texts.customers.links.app_links.google_store">
                  <img :draggable="false" :src="googleStoreImg" class="object-contain w-[111px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Google store"/>
                </a>
              </div>
          </div>
        </div>

    </div>
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import SectionTitle from './SectionTitle.vue';
import texts from '@/fixtures/texts.json';
import FormInput from '../Generic/FormInput.vue';
import { required } from '@vuelidate/validators';
import logoImg from '@/assets/imgs/logo-dark.svg';
import twitterImg from '@/assets/imgs/twitter.svg';
import facebookImg from '@/assets/imgs/fb.svg';
import snapchatImg from '@/assets/imgs/snapchat.svg';
import instagramImg from '@/assets/imgs/insta.svg';
import googleStoreImg from '@/assets/imgs/store_dark.svg';
import appleStoreImg from '@/assets/imgs/app_store_dark.svg';


export default {
  setup(){
      return {
        v$: useVuelidate(),
      }
  },
  data(){
    return {
      logoImg,
      twitterImg,
      facebookImg,
      snapchatImg,
      instagramImg,
      googleStoreImg,
      appleStoreImg,
      texts,
      isSubmitted: false,
      isLoading: false,
      formState: {
        name:"",
        phone: "",
        message: ""
      }
    }
  },
  validations() {
    return {
      formState: {
        name: { required },
        phone: { required },
        message: { required }
      }
    }
  },
  components: {
      SectionTitle,
      FormInput
  }
}
</script>

<style lang="scss" scoped>
  #contact_us{
    .submit__button{
      background: transparent linear-gradient(180deg, #92278F 0%, #5C2D91 100%) 0% 0% no-repeat padding-box;
      transition: 0.3s linear;
      transition-property: filter;
      &:hover{
        filter: brightness(1.1);
      }
    }

  }
</style>