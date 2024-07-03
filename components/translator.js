const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Function to reverse a dictionary
  reverseDictionary(dictionary) {
    return Object.keys(dictionary).reduce((acc, key) => {
      acc[dictionary[key]] = key;
      return acc;
    }, {});
  }

  // Function to highlight the text
  highlight(text) {
    return `<span class="highlight">${text}</span>`
  }

  // Function to replace a phrase with a value
  replacePhrasesWithValues(string, dictionary) {
    Object.keys(dictionary).forEach(key => {
      if (string.includes(key)) {
        const value = dictionary[key];
        string = string.replace(key, value); 
      }
    });
    return string;
  }

  // Function to replace a phrase with a value
  replacePhrasesWithValuesAndHighlight(string, dictionary) {
    Object.keys(dictionary).forEach(key => {
      if (string.includes(key)) {
        const value = dictionary[key];
        string = string.replace(key, this.highlight(value)); 
      }
    });
    return string;
  }

  // Translate function
  translate(text, mergeDictionary, title, timeRegex, timeTarget) {
    let matchDictionary = {}
    
    // Filter words with spaces from mergeDictionary
    const wordsWithSpace = Object.fromEntries(
      Object.entries(mergeDictionary).filter(([key, value]) => key.includes(" "))
    );

    // Loop through the words with spaces and and the matching key/value to the matchDictionary
    Object.entries(wordsWithSpace).map(([key, value]) => {
      if (text.toLowerCase().includes(key)) {
        // this is to get the key with the same case as in the text
        key = text.match(new RegExp(key, "i"))[0];
        matchDictionary[key] = value;
      }
    })

    // Creating table of all simple words (without spaces) from mergeDictionary
    text.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
      if (mergeDictionary[word.toLowerCase()]) {
        matchDictionary[word] = mergeDictionary[word.toLowerCase()];
      } 
    });

    // Finding for titles, assuming that all title words are capitalized in text string
    Object.entries(title).map(([key, value]) => {
      let escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Échappe les caractères spéciaux
      let regex = new RegExp(`\\b${escapedKey}(\\.)?(?!\\w)`, "i");
      if (text.match(regex)) {
        key = key.charAt(0).toUpperCase() + key.slice(1);
        matchDictionary[key] = value.charAt(0).toUpperCase() + value.slice(1);
      }
    })

    // Finding time paterns and adding them to the matchDictionary
    let wordPatternIsFound = text.match(timeRegex);
    if (wordPatternIsFound) {
      wordPatternIsFound.forEach(word => {
        matchDictionary[word] = word.replace(timeRegex, timeTarget);
      })
    }

    // console.log(matchDictionary)
    return matchDictionary;
  }

  // This function is used to pass the req and send back the translation
  main(textToTranlate, language) {
    // console.log(textToTranlate, language)
    let text = textToTranlate;
    let locale = language;

    // Define initial language
    let initialLanguage = locale.split("-")[0];

    let matchDictionary = {}
    // Define the parameters in function of language
    if (initialLanguage === "american") {
      let mergeDictionary = {...americanOnly, ...americanToBritishSpelling};
      let title = {...americanToBritishTitles};
      let timeRegex = /(\d{1,2}):(\d{2})/g
      let timeTarget = "$1.$2"
      matchDictionary = this.translate(text, mergeDictionary, title, timeRegex, timeTarget);
    } else {
      let mergeDictionary = {...britishOnly, ...this.reverseDictionary(americanToBritishSpelling)};
      let title = this.reverseDictionary(americanToBritishTitles);
      let timeRegex = /(\d{1,2}).(\d{2})/g
      let timeTarget = "$1:$2"
      matchDictionary = this.translate(text, mergeDictionary, title, timeRegex, timeTarget);
    }

    let translatedText = this.replacePhrasesWithValues(text, matchDictionary);
    let translatedTextWithHighlight = this.replacePhrasesWithValuesAndHighlight(text, matchDictionary);
    // console.log(translatedText, translatedTextWithHighlight)


    return [translatedText, translatedTextWithHighlight];
  }
}

module.exports = Translator;