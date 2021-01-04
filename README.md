# rg - Random Generator

This package export anonymous class just import it in your project. 
```javascript
const Rg = require('rg");
```
or
```javascript
import Rg from 'rg';
```
Then create rg object:
```javascript
const rg = new Rg();
```
Your new object has several methods:

1. rg.genOne(min, max);
  This method return one random integer between min and max (min <= YourNumber < max).
2. rg.genMany(min, max, quantity);
  This method return an array with a length <quantity> with random numbers between min and max (min <= YourNumber < max).
3. rg.genDate(min, max);
  This method return date between min and max. It is based on miliseconds so it can be min <= YourNewDate <= max.
4. rg.genManyDate(min, max, quantity);
  This method return an array with a length <quantity> with date between min and max. It is based on miliseconds so it can be min <= YourNewDate <= max.
5. rg.genFloat(min, max, decimalPlaces);
  This method return one random floating point number between min and max (min <= YourNumber < max). Maximum number of decimal places is 16.
6. rg.genManyFloat(min, max, decimalPlaces, quantity);
  This method return an array with a length <quantity> with random floating point number between min and max (min <= YourNumber < max). Maximum number of decimal places is 16.
7. rg.genBool();
  This method return one random bool value, true or false.
8. rg.genManyBool(quantity);
  This method return an array with a length <quantity> with random bool value, true or false.
