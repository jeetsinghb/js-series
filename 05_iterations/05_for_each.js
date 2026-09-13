// for each

// HO - Higher Order [Higher Order Array Loop]

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach( function (item) { // function running in the arry
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);
} )


function printMe(item) {
    console.log("lang:", item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

/*

OUTPUT:

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )