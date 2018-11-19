// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Lou';
let name2 = name;

console.log(name, name2);

name = 'Louis';

// let's work with array
const players = ['Louis', 'Sarah', 'Derek', 'Leann', 'Aaron', 'Ryan'];

const team = players;

console.log(players, team);

team[3] = 'Lux';
// Arrays are passed by reference

const team2 = players.slice();
// if you slice an array and do not put in a value in the slice then it would make a copy of the array and make a new array
// it would be passed by value and not by value

// also es6 operator
const copyPlayers = [...players];

const cap = {
  name: "Louis",
  occupation: 'Software Developer'
}
// You can also use Object.assign();
const cap2 = Object.assign({}, person, {number: 99});
// The spread for objects is not available for JS yet, it is in React
// const cap3 = {...person};

const lou = {
  name: 'Louis',
  occupation: 'Software Developer',
  hobby: 'Poker'
};

const dev = Object.assign({}, lou);
const dev2 = JSON.parse(JSON.stringify(lou));
// stringify makes the obj a string and then immediately parse it back to en object
