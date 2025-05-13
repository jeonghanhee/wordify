export {
    setFormat
}

declare global {
    interface String {
      toPretty(this: string): string;
      toCamelCase(this: string): string;
      toPascalCase(this: string): string;
      toKebabCase(this: string): string;
      toSnakeCase(this: string): string;
      toFormat(this: string): string;
    }
}


/**
 * Makes the string pretty.
 * @constructor
 * @param {string} this 
 * @returns
 */
const toPretty = function (this: string): string {
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

/**
 * Convert string to CamelCase
 * @constructor
 * @param {string} this
 * @returns
 */
const toCamelCase = function (this: string): string {
    var new_text = "";

    this.split(" ").forEach(text => {
        new_text += text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    })
    return new_text.charAt(0).toLowerCase() + new_text.slice(1);
}

/**
 * Convert string to PascalCase
 * @constructor
 * @param {string} this
 * @returns 
 */
const toPascalCase = function (this: string): string {
    var new_text = this.toCamelCase();
    return new_text.charAt(0).toUpperCase() + new_text.slice(1);
}

/**
 * Convert string to KebabCase
 * @constructor
 * @param {string} this
 * @returns
 */
const toKebabCase = function (this: string): string {
    return this.replace(/ /gi, "-").toLowerCase();
}

/**
 * Convert string to SnakeCase
 * @constructor
 * @param {string} this
 * @returns
 */
const toSnakeCase = function (this: string): string {
    return this.replace(/ /gi, "_").toLowerCase();
}

// static area
type FormatFunc = (text: string) => string;
class StaticFormatter {
    private static instance: StaticFormatter;
    private func: FormatFunc;

    constructor() {
    }

    static getInstance(): StaticFormatter {
        if (!this.instance)
            this.instance = new StaticFormatter();

        return this.instance;
    }

    setFunc(func: FormatFunc) {
        this.func = func;
    }

    getFunc() {
        return this.func;
    }
}
const setFormat = (func: FormatFunc) => StaticFormatter.getInstance().setFunc(func);

const toFormat = function (this: string): string {
    return StaticFormatter.getInstance().getFunc()(this);
}

// noImplicitThis  
String.prototype.toPretty = toPretty;
String.prototype.toCamelCase = toCamelCase;
String.prototype.toPascalCase = toPascalCase;
String.prototype.toKebabCase = toKebabCase;
String.prototype.toSnakeCase = toSnakeCase;
String.prototype.toFormat = toFormat;