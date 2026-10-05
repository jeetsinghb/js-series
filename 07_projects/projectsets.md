# Projects related to DOM

# Solution Code

## Project 1

### HTML:

```html
<div class="canvas">
    <div class="button" id="gray"></div>
    <div class="button" id="white"></div>
    <div class="button" id="blue"></div>
    <div class="button" id="yellow"></div>
    <div class="button" id="black"></div>
    <div class="button" id="purple"></div>
</div>
```

### JS

```javascript
const btns = document.querySelectorAll('.button');

const body = document.querySelector('body');

btns.forEach((btn) => {
  // console.log(btn.id);
  btn.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.target);

    if (event.target.id === 'gray') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'black') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```

## Project 2

### HTML:

```html
<form>
    <p>
        <label for="height">Height in CM:</label>
        <input type="text" id="height" />
    </p>

    <p>
        <label for="weight">Weight in KG:</label>
        <input type="text" id="weight" />
    </p>

    <button>Calculate</button>

    <div id="results"></div>

    <div id="weight-guide">
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
    </div>
</form>
```

### JS:

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value

// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please enter a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = '';

    if (bmi < 18.6) {
      message = 'You are under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'You fall under normal range';
    } else {
      message = 'You are overweight';
    }

    // show the result
    results.innerHTML = `<span>${bmi} <br/> ${message}</span>`;
  }
});
```

## Project 3

### HTML:

```html
<div id="clock"></div>
```

### JS:

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

### HTML:

```HTML
<h1>Number guessing game</h1>

<p>Try and guess a random number between 1 and 100.</p>
<p>You have 10 attempts to guess the right number.</p>

<br />

<form class="form">
    <label for="guessField" id="guess">Guess a number</label>

    <input type="text" id="guessField" class="guessField" />

    <input
        type="submit"
        id="subt"
        value="Submit guess"
        class="guessSubmit"
    />
</form>

<div class="resultParas">
    <p>Previous Guesses: <span class="guesses"></span></p>
    <p>Guesses Remaining: <span class="lastResult">10</span></p>
    <p class="lowOrHi"></p>
</div>
```

### JS:

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const div = document.createElement('div');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

// Methods

function validateGuess(guess) {
  // validate the number
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Randome was: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  /**
   * check weather the number is equal to the generated number
   * if it equal use the displayMessage method to display the message
   * check if the numer is high or low, and show the display a message based on it
   * */
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low, try again`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is high, try again`);
  }
}

function displayGuess(guess) {
  // clean up the input, update the guess message array and remaining count
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display low or high text
  lowOrHi.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
  userInput.value = '';
  submit.setAttribute('disabled', '');
  div.classList.add('button');
  div.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    submit.removeAttribute('disabled');
    startOver.removeChild(div);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}
```

## Project 5

### HTML:

```html
<div id="insert">
  <div class="key">Press any key</div>
</div>
```

### JS:

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});
```

## Project 6

### HTML:

```html
<h1>Start should change the Background color every second</h1>
<div>
  <button id="start">Start</button>
  <br /><br />
  <button id="stop">Stop</button>
</div>
```

### JS:

```javascript
// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const start = document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const stop = document.querySelector('#stop').addEventListener('click', stopChangingColor);

// console.log(Math.floor(Math.random() * 16));

// console.log(randomColor());
```