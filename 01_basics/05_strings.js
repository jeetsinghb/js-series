const name = "Tarjeet";
const repoCount = 11;

// console.log(name + repoCount + value);

// String interpolation - back ticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hightech-s-com'); // object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 7);  // ignores last value / won't include last value
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "     John     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // works for white spaces and new line

const url = "https://google.com/youtube%20website";
console.log(url.replace('%20', '-'));

console.log(url.includes('google'));
console.log(url.includes('john'));

console.log(gameName.split('-'));