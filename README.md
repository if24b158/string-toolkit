# @if24b158/string-toolkit

A small JavaScript library that provides useful string manipulation functions.

## Features
- Convert strings to snake_case
- Convert strings to kebab-case

## Installation

### Using npm
```bash
npm install @if24b158/string-toolkit
```
### Using yarn
```bash
yarn add @if24b158/string-toolkit
```
### Usage
```bash
const { toSnakeCase, toKebabCase } = require("@if24b158/string-toolkit");

console.log(toSnakeCase("Hello World"));
// Output: hello_world

console.log(toKebabCase("Hello World"));
// Output: hello-world
```
### Testing
```bash
npm test
```
### License

MIT License