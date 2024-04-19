let placesToVisit: string[] = [
  "Paris",
  "South Korea",
  "Japan",
  "Turkey",
  "China",
];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log([...placesToVisit].sort().join(","));

console.log("Original Order:");
console.log(placesToVisit);

console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.reverse().sort().join(","));

console.log("Original Order:");
console.log(placesToVisit.join(","));

console.log("Reversed Order:");
console.log(placesToVisit.reverse().join(","));

console.log("Original order:");
console.log(placesToVisit.join(","));

console.log("Alphabetical Order:");
console.log(placesToVisit.sort().join(","));

console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.sort().join());
