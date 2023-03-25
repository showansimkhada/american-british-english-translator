'use strict';
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let locale = req.body.locale;
      var text = req.body.text;
      text.trim('.');
      if (!text) {
        res.json({
          "error": "No text to translate"
        })
      } else {
        // translate to british
        var result;
        if (locale === 'american-to-british') {
          result = translator.traTBr(text);
        } else {
          result = translator.traTAm(text);
        }
        if (result === text) {
          return res.json({
            translation: "Everything looks good to me!"
          })
        } else {
          return res.json({
            translation: result
          })
        }
      }
    });
};
