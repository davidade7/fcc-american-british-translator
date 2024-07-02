'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log("api input >>", req.body)
      let { text, locale } = req.body

      let response = translator.main(text, locale)
      console.log("api output >>", response)

      res.json({ text: text, translation: response})
    }); 
}; 
