import "./wordify";
import { setFormat } from "./wordify";

console.log("helloWorld".toPretty());

console.log("USER LOGIN LOG".toCamelCase())
console.log("USER LOGIN LOG".toPascalCase())
console.log("USER LOGIN LOG".toKebabCase())
console.log("USER LOGIN LOG".toSnakeCase())

setFormat((text: string) => {
    return text.toUpperCase();
})

console.log("helloworld".toFormat());