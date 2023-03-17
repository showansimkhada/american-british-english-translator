const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
var AO = new Object(americanOnly);
var ATBS = new Object(americanToBritishSpelling);
var ATBT = new Object(americanToBritishTitles);
var BO = new Object(britishOnly);
    
class Translator {
    traTAm(str) {
        console.log("Translating to American")
        var result = '';
        let strSplit = str.split(' ');
        for (let i = 0; i < strSplit.length; i++) {
            if (AO.hasOwnProperty(strSplit[i])) {
                result += ATBS[strSplit[i]] + " ";
            }
            else {
                result += strSplit[i]+" ";
            }
        }
        return result;
    }

    traTBr(str) {
        console.log("Translating to British")
        var result = '';
        if (ATBS.hasOwnProperty(str)) {
            result += ATBS[str] + " ";
        }
        else if (BO.hasOwnProperty(str)){
            result += BO[str];
        }
        return result;
    }
}

module.exports = Translator;