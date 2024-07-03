'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body

      if (!locale || text == undefined) {
        return res.json({ error: 'Required field(s) missing' })
      } 
      if (text.length === 0) {
        return res.json({ error: 'No text to translate' })
      } 
      else if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' })
      } 
      else {
        let response = translator.main(text, locale)
        // console.log(response)

        let translation = response[0];
        let translationWithHighlight = response[1];

        // Check if there is not translation
        if (translation === text) {
          translationWithHighlight = "Everything looks good to me!";
        }

        res.json({ text: text, translation: translationWithHighlight})
      }
    }); 
}; 
