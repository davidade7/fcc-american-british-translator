const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Function to highlight the text
  highlight(text) {
    return `<span class="highlight">${text}</span>`
  }

  // Function to find a value when we have the key
  findKeyByValue(dictionary, valueToFind) {
    return Object.keys(dictionary).find(key => dictionary[key] === valueToFind);
  }

  // Function to replace a phrase with a key
  replacePhrasesWithKeys(string, dictionary) {
    Object.values(dictionary).forEach(value => {
      if (string.includes(value)) {
        const key = this.findKeyByValue(dictionary, value);
        string = string.replace(value, this.highlight(key)); 
      }
    });
    return string;
  }

  // Function to replace a phrase with a value
  replacePhrasesWithValues(string, dictionary) {
    Object.keys(dictionary).forEach(key => {
      if (string.includes(key)) {
        const value = dictionary[key];
        string = string.replace(key, this.highlight(value)); 
      }
    });
    return string;
  }

  // This function is used to pass the req and send back the translation
  main(textToTranlate, language) {
    let text = textToTranlate.toLowerCase();
    let locale = language;

    // Define initial language
    let initialLanguage = locale.split("-")[0];
    console.log("initial language >>", initialLanguage);

    let finalString = ''
    
    // if initial language is american
    if (initialLanguage === "american") {
      // 1st step: checks for spelling in this language
      let stepOne = this.replacePhrasesWithKeys(text, americanOnly);

      // 2nd step: checks for titles
      let stepTwo = this.replacePhrasesWithValues(stepOne, americanToBritishTitles);
      
      // 3rd step: checks for spelling in the other language
      let stepThree = this.replacePhrasesWithValues(stepTwo, americanToBritishSpelling);
      
      // 4th step: checks time patterns
      let stepFour = stepThree.replace(/(\d{1,2}):(\d{2})/g, this.highlight("$1.$2"));
      finalString = stepFour;
    }
    else {
      // 1st step: checks for spelling in this language
      let stepOne = this.replacePhrasesWithKeys(text, americanOnly);

      // 2nd step: checks for titles
      let stepTwo = this.replacePhrasesWithKeys(stepOne, americanToBritishTitles);

      // 3rd step: checks for spelling in the other language
      let stepThree = this.replacePhrasesWithKeys(stepTwo, americanToBritishSpelling);

      // 4th step: checks time patterns
      let stepFour = stepThree.replace(/(\d{1,2}).(\d{2})/g, this.highlight("$1:$2"));
      finalString = stepFour;
    }

    // Capitalize the first letter
    finalString = finalString.charAt(0).toUpperCase() + finalString.slice(1);

    // Check if there is a translation
    if (finalString === text) {
      finalString = "Everything looks good to me!";
    }

    return finalString;
  }
}

module.exports = Translator;