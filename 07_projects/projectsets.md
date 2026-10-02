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