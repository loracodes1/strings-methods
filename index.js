//1. toUpperCase() string method
 const Sentence ="I am happy that I'm conquering my fears and i have ventured fully into Software Engineering.";
console.log(Sentence.toUpperCase())

//the output will all be capitalized: I AM HAPPY THAT I'M CONQUERING MY FEARS AND I HAVE VENTURED FULLY INTO SOFTWARE ENGINEERING.
//you have to call the function by putting the () to call the function

//2.toLowerCase() string method
const Happiness="I am happy that I'm conquering my fears and i have ventured fully into Software Engineering.";
console.log(Happiness.toLowerCase())
// the output for the above code will be all in small letters.

//3. .slice() string method
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"