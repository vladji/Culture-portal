import { navigate } from "gatsby"

export const onLinkClickHandler = (path, currentPath, lang) => {
  if(lang==='ru' || lang==='en'){
    navigate(currentPath.slice(0,-4)+path)
  }else {
    navigate(currentPath+path)
  }
};

export const getLangPath = (l)=> {
  switch (l) {
    case 'ru': return 'ru/';
    case 'en': return 'en/';
    default: return '';
  }
};
