// for in

const myOObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    sw: "swift"
}

for (const key in myOObj) {
    // console.log(myOObj[key]);
    console.log(`${key} shortcut is for: ${myOObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // 0 - 4 count/keys
    console.log(programming[key]);
}

const map = new Map();

map.set('IN', 'India');
map.set('JP', 'Japan');
map.set('FR', 'France');

for (const key in map) {
    console.log(key); // [blank] - not iterable
}

/*

for...in → for objects

for...of → for iterable things like Map, Array, Set, strings

*/