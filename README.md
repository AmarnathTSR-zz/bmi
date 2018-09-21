bmi-calculator-function
=======================

A Body Mass Index calculator.
<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 23px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/amarnath"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>
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