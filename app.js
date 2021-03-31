const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { callbackify } = require('util');
const { sign } = require('crypto');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.listen(port, () => {
    console.log(`server is up on port: ${port}`);
    // forLoop();
    loopSignal();
});



// const makeDot = () => {
// const 
// }



// fruit example

const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}
const fruitsToGet = ['apple', 'grape', 'pear'];


// const sleep = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

const getNumFruit = fruit => {
    return sleep(1000).then(v => fruitBasket[fruit])
}


const forLoop = async _ => {
    console.log('Start')
  
    for (let index = 0; index < fruitsToGet.length; index++) {
      const fruit = fruitsToGet[index]
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
    }
  
    console.log('End')
  }

  const signalLengths = {
      'dot': 750,
      'dash': 2000
  }
  const signal = ['dash', 'dot', 'dot', 'dash'];

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
//   const sleep = ms => {
//     // console.log('ms', ms);
//     return new Promise(resolve => setTimeout(resolve)), ms;
//   }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const getDuration = signal => {
    var durationFactor = 1;
    if (signal == 'dot') {
        durationFactor = .75;
    }else if(signal == 'dash'){
        durationFactor = 2;
    }
    return sleep(1000 * durationFactor);
  }

  const loopSignal = async _ => {
      console.log('Start');

      for(let index = 0; index < signal.length; index++) {
        //   console.log(signal[index]);
          const signalBit = await getDuration(signal[index]);
        //   console.log(signalBit);
          console.log(signalBit);
      }
  }