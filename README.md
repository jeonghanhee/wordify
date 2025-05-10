# Wordify
Library that makes words prettier and better to loot at.

## Usage
```ts
import "./wordify";

console.log("helloWorld".toPretty());
```

```ts
// Camel case
console.log("USER LOGIN LOG".toCamelCase());

// Pascal case
console.log("USER LOGIN LOG".toPascalCase());

// Pascal case
console.log("USER LOGIN LOG".toKebabCase());

# Snake case
console.log("USER LOGIN LOG".toSnakeCase());
```
