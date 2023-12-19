import {translate} from './translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value; //morning
  const language = document.getElementById("language").value; //english
  const translatedTextElement = document.getElementById("translatedText");  //output text field
  const translatedLanguage = document.getElementById("translatedLanguage").value; //output language
  const translated = translate(language, inputText, translatedLanguage); //pagi
  translatedTextElement.value = translated;
  
  translatedTextElement.innerHTML = `${translated}`;
}

window.translateText = translateText;