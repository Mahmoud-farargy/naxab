import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => {
        return {
             currentTab: "customers",
             activeLinkName: "index"
        }  
    },
    actions: {
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
    }
});