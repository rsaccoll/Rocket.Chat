
var fs = require('fs');
//var assert = require('assert')

//var emojiList = JSON.parse(fs.readFileSync('emoji.json', 'utf-8'));

/**
 * Open the emoji.js, search for the "thumbs up"
 * an write on the "aliases" the (Y), (y) 
 * it's a hack, but kind of fix the bug for now.
 */

var stringfied = JSON.stringify(fs.readFileSync('emoji.json', 'utf-8'));


stringfied = stringfied.replace(/"aliases":[":+1:",":thumbup:"]/gm, '"aliases":[":+1:",":thumbup:","(y)","(Y)"]');

stringfied.save();  

