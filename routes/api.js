'use strict';
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let locale = req.body.locale;
      var text = req.body.text;
      if (!text) {
        res.json({
          "error": "No text to translate"
        })
      } else {
        // translate to british
        if (locale === 'american-to-british') {
          let result = translator.traTBr(text);
          if (result.split() === text.split()) {
            console.log('same')
          }
          res.json({
            translation: result
          })
        } else {
          // translate to american
          // Split the texts non charaters
          // Split words and go through every words
          // If it begain with capital letters and result is same then output should be eveythings look good
          // else just output all
          // all output first word starts with capital letter
          // all translated words should be highlighted
          let result = translator.traTAm(text);
          console.log(result)
          if (result.split() == text.split()) {
            console.log('same')
          }
          res.json({
            translation: result
          })
        }
      }
    });
};
