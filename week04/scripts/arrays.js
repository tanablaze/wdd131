// Original array
const names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// 1. Filter names that start with B
const namesB = names.filter(name => name.charAt(0) === 'B');

console.log("Names starting with B:");
console.log(namesB);

// 2. Create array of name lengths
const nameLengths = names.map(name => name.length);

console.log("Lengths of names:");
console.log(nameLengths);

// 3. Calculate average name length
const averageLength =
    names.reduce((total, name) => total + name.length, 0) / names.length;

console.log("Average length:");
console.log(averageLength);