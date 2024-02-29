# FshApi
A wrapper for Fsh api

## Usage
```js
const fshapi = require('fshapi');

const FA = new fshapi();

(async() => {
  console.log(await FA.call('animal', {animal: 'cat'}))
})()
```

## Functions
`call('endpoint', {args}, {fetch arguments})` - This is used to call any endpoint