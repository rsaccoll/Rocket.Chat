
var fs = require('fs');

var switchEmoji = JSON.parse(fs.readFileSync('emoji.json', 'utf-8'));

/**
 * Open the emoji.js, search for the "thumbs up"
 * an write on the "aliases" the (Y), (y) 
 * it's a hack, but kind of fix the bug for now.
 */

/*
            if(emojisByCategory[switchEmoji[emoji].unicode] == "1f4af) {
            console.log("eita.. "+JSON.stringify(emojisByCategory, null, '\t') + ';'));
}
*/


for (var emoji in switchEmoji) {
    if(switchEmoji.hasOwnProperty(emoji)) {
        //var thumbs = emoji.indexOf("thumbsup")
        var stuff = emoji.search("thumbsup")
            if(stuff === 0) {
                console.log("resultado: "+ emoji);



            }
    }

}    


