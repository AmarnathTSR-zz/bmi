bmi-calculator-function
=======================

A Body Mass Index calculator.

<a href="https://www.buymeacoffee.com/amarnath" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

# Formla

```js

Metric BMI Formulae: - BMI= (weight in Kilograms/ (height in meters*height in meters))


Less than 18.5 is represents underweight

Amid 18.5 -24.9 indicate normal weight

Between 25 -29.9 denotes over weigh

Beyond 30 signifies obesity
```

# Install

```js
npm i bmi-calculator-function

```
# example

```js
var bmi = require('bmi-calculator-function');

// 1.8Meter Height, 75KG Weight
console.log(bmi.bmi(1.8, 75));

// { bmi: '23.15', index: 'Normal Weight' }
```

# api

```js
var bmi = require('bmi-calculator-function');
```

# `var bmi = bmi(weight, height);`

- `weight` is a number in kilograms
- `height` is a number in centimetres

# `bmi`

`bmi` is an object with the following properties:

- `bmi` is the bmi number, e.g. `21.36`
-`index` Reffers the current position, e.g. `Over Weight` or `under weight`


# cli

- Install [node](http://nodejs.org/download).
- Run `npm i bmi-calculator-function`

```
# Author

 - Amarnath TSR (https://www.amarnath.xyz)

# license

MIT