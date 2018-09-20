bmi-calculator-function
=======================

A Body Mass Index calculator.

# Install

```js
npm i bmi-calculator-function

```
# example

```js
var bmi = require('bmi-calculator-function')

// 154 Kg, 172 CM
console.log( bmi(154, 72) );

```

# api

```js
var bmi = require('bmi-calculator-function')
```

# `var bmi = calcBmi(weight, height, [imperial])`

- `weight` is a number in kilograms
- `height` is a number in centimetres

# `bmi`

`bmi` is an object with the following properties:

- `value` is the bmi number, e.g. `21.36`
- `name` is a human-readable string, e.g. `'severely underweight'`


# cli

- Install [node](http://nodejs.org/download).
- Run `npm i bmi-calculator-function`

```

# license

MIT