
var fs = require('fs');

var switchEmoji = JSON.parse(fs.readFileSync('emoji.json', 'utf-8'));

/**
 * Open the emoji.js, search for the "thumbs up"
 * an write on the "aliases" the (Y), (y) 
 * it's a hack, but kind of fix the bug for now.
 */

var emojisByCategory = {};
//var fulano = stringfied.replace(/"aliases":[":+1:",":thumbup:"]/gm, '"aliases":[":+1:",":thumbup:","(y)","(Y)"]');
for (var emoji in switchEmoji) {
    if(switchEmoji.hasOwnProperty(emoji)) {

    }
} 

