const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
var AO = new Object(americanOnly);
var ATBS = new Object(americanToBritishSpelling);
var ATBT = new Object(americanToBritishTitles);
    
class Translator {
    traTAm(str) {
        let sentence = str;
        console.log("Translating to American")
        var keys = Object.keys(britishOnly);
        for (let i = 0; i < keys.length; i++) {
            // use `` to get the value from variables and treat them as string
            let regex = new RegExp(`(${keys[i]}\\b)`, "gi");
            if (sentence.match(regex)) {
                let trans = str.replace(regex, britishOnly[keys[i]]);
                sentence = trans;
            }
        }
        keys = Object.keys(ATBS);
        for (let i = 0; i < keys.length; i++) {
            let regex = new RegExp(keys[i], "gi");
            console.log(regex);
            if (sentence.match(regex)) {
                console.log('replace')
                let trans = str.replace(regex, ATBS[keys[i]]);
                sentence = trans;
            }
        }
        return sentence;
    }

    traTBr(str) {
        console.log("Translating to British")
        var result = '';
        if (ATBS.hasOwnProperty(str)) {
            result += ATBS[str];
        }
        else if (AO.hasOwnProperty(str)){
            result += AO[str];
        }
        else{
            result += str;
        }
        return result;
    }
}

module.exports = Translator;