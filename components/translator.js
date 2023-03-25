const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js');
    
class Translator {
    traTAm(str) {
        let sentence = str;
        console.log("Translating to American")
        var keys = Object.keys(britishOnly);
        for (let i = 0; i < keys.length; i++) {
            // use `` to get the value from variables and treat them as string //b for words
            let regex = new RegExp(`(${keys[i]}\\b)`, "gi");
            if (sentence.match(regex)) {
                let trans = sentence.replace(regex, britishOnly[keys[i]]);
                sentence = trans;
            }
        }
        keys = Object.keys(americanToBritishSpelling);
        for (let i = 0; i < keys.length; i++) {
            let regex = new RegExp(`(${americanToBritishSpelling[keys[i]]}\\b)`, "gi");
            if (sentence.match(regex)) {
                let trans = sentence.replace(regex, keys[i]);
                sentence = trans;
            }
        }
        keys = Object.keys(americanToBritishTitles);
        for (let i = 0; i < keys.length; i++) {
            let regex = new RegExp(`(${americanToBritishTitles[keys[i]]}\\b)`, 'gi')
            if (sentence.match(regex)){
                let trans = sentence.replace(regex, keys[i]);
                sentence = trans;
            }
        }
        return sentence;
    }

    traTBr(str) {
        console.log("Translating to British")
        let sentence = str;
        var keys = Object.keys(americanOnly);
        for (let i = 0; i < keys.length; i++) {
            // use `` to get the value from variables and treat them as string //b for words
            let regex = new RegExp(`(${keys[i]}\\b)`, "gi");
            if (sentence.match(regex)) {
                let trans = sentence.replace(regex, americanOnly[keys[i]]);
                sentence = trans;
            }
        }
        keys = Object.keys(americanToBritishSpelling);
        for (let i = 0; i < keys.length; i++) {
            let regex = new RegExp(`(${keys[i]}\\b)`, "gi");
            if (sentence.match(regex)) {
                let trans = sentence.replace(regex, americanToBritishSpelling[keys[i]]);
                sentence = trans;
            }
        }
        keys = Object.keys(americanToBritishTitles);
        for (let i = 0; i < keys.length; i++) {
            let regex = new RegExp(`(${keys[i]}\\b)`, 'gi')
            if (sentence.match(regex)){
                console.log(keys[i]);
                let trans = sentence.replace(regex, americanToBritishTitles[keys[i]]);
                sentence = trans;
            }
        }
        return sentence;
    }
}

module.exports = Translator;