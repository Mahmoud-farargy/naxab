import { useGlobalStore } from "@/store/Modules/global";

// text trimmer
const trimText = (txt, limit) =>
txt
  ? `${
      txt.split("").length > limit
        ? txt.split("").slice(0, limit).join("") + "..."
        : txt
    }`
  : "";

const lowerString = (txt) =>
 typeof txt === "string"
    ? txt.toLowerCase()
    : typeof txt === "number"
    ? txt
    : "";

const upperString = (txt) =>
  typeof txt === "string"
    ? txt.toUpperCase()
    : typeof txt === "number"
    ? txt
    : "";
const localStorageBasicData = {
  isDarkMode: 0,
  lang: "ar"
}
const useLocalStorage = ({type, key, value, callBack}) => {
  const localStorageAppKey = "naxab";
  if(!window?.localStorage){
    return;
  }
  switch(lowerString(type)){
    case "set": {
      if(!key){
        return;
      }
      const storageCopy = useLocalStorage({type: 'get'});
      const newLocStorageArr = {...storageCopy, [key] : value};
      Object.keys(localStorageBasicData).forEach(key => {
          if(!newLocStorageArr.hasOwnProperty(key)){
              newLocStorageArr[key] = localStorageBasicData[key];
          }
      });
      localStorage.setItem(localStorageAppKey, JSON.stringify(newLocStorageArr));
      window.dispatchEvent( new Event('storage')); // triggers the localstorage event listener(s)
      const global = useGlobalStore();
      global.updateLocalStorageCopy(newLocStorageArr);
      return;
    }
    case "get": {
      return JSON.parse(localStorage.getItem(localStorageAppKey));
    }
    case "reset": {
      localStorage.setItem(localStorageAppKey,  JSON.stringify(localStorageBasicData));
      window.dispatchEvent( new Event('storage') );
      return;
    }
    case "listener": {
      window.addEventListener('storage', (e) => {
        return callBack(useLocalStorage({type: 'get'}));
      });
      break;
    }
    case "clear": {
      localStorage.setItem(localStorageAppKey, JSON.stringify({}));
      window.dispatchEvent( new Event('storage') );
      return;
    }
    default: () => {}
  }
}

export {
  trimText,
  useLocalStorage,
  lowerString,
  upperString,
  localStorageBasicData
}
