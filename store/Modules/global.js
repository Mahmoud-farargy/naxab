import { defineStore } from "pinia";
import { localStorageBasicData, lowerString } from "@/helpers";

export const useGlobalStore = defineStore('global', {
    state: () => {
        return {
            isAppStarting: true,
            currentTab: "customers",
            activeLinkName: "index",
            localStorageCopy: localStorageBasicData,
            isRTL: true
        }  
    },
    actions: {
        changeAppStartingState(newBool) {
            this.isAppStarting = typeof newBool === "boolean" ? newBool : !this.isAppStarting;
        },
        changeCurrentTab(newTabId){
            if(typeof newTabId === "string"){
                this.currentTab = newTabId;
            }
        },
        updateActiveLinkName(linkName){
            if(!linkName){
                return;
            }
            this.activeLinkName = linkName;
        },
        updateLocalStorageCopy(newVal){
            if(!newVal){
                return;
            }
            this.localStorageCopy = newVal;
            this.isRTL = lowerString(newVal?.lang) === 'ar';
        }
    }
});