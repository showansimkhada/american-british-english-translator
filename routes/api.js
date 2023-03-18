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
        if (locale === 'american-to-british') {
          // Translate sentence
          // Split the words
          var wordArr = text.split(' ');
          // check every words and translate
          var result = [];
          for (let i = 0; i < wordArr.length; i++) {
            let word = translator.traTBr(wordArr[i]);
            if (word !== wordArr[i]) {
              console.log('highlight')
            }
            result.push(word);
          }
          res.json({ 
            translation: result.join(' ')
          })
        } else {
          // Spliting dosen't help so pass the whole text instead
          let result = translator.traTAm(text);
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
      }
    });
};
