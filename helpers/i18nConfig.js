
import { en, ar } from "../locales";
const resources = {
    ar, 
    en
}
const i18nConfig = {
    legacy: false,
    globalInjection: true,
    locale: 'ar',
    fallbackLng: "ar",
    fallbackLocale: 'ar',
    messages: resources
}

export {
    i18nConfig
};