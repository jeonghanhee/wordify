export {}

declare global {
    interface String {
      toPretty(this: string): string;
    }
}


/**
 * Makes the string pretty.
 * @constructor
 * @param {string} this 
 */
const toPretty = function (this: string) {
    var new_text: string = "";
    let char: string = "";

    for (var i = 0; i < this.length; i++) {
        char = this.charAt(i);
        if (i == 0) {
            new_text += char.toUpperCase();  
            continue;
        }

        if (!(/^[a-zA-Z]+$/.test(char)) || char.toUpperCase() != char)
            new_text += char;
        else if (char.toUpperCase() == char) {
            if (new_text.charAt(i - 1) == new_text.charAt(i - 1).toUpperCase()) 
                new_text += char;
            else
                new_text += ' ' + char;
        }
    }
    return new_text;
};

// noImplicitThis  
String.prototype.toPretty = toPretty;