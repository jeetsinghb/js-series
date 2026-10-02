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

    <button type="button">Calculate</button>

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