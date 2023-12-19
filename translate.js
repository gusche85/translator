const translations = {
  "malay" : {
    "english" : {
     "pagi" : "morning",
     "meja" : "table"
    }
  },
  
  "english" : {
    "malay" : {
      "morning" : "pagi",
      "table" : "meja"
    }
  },
};


export function translate(language, inputText, translatedLanguage) {
  if (
      translations[language] && 
      translations[translatedLanguage] &&
      translations[language][translatedLanguage] && 
      translations[language][translatedLanguage][inputText] 
     ) {
    return translations[language][translatedLanguage][inputText];
  } 
    
  else {
    return "Not found";
  }
}
