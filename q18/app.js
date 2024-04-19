var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = [
    "Paris",
    "South Korea",
    "Japan",
    "Turkey",
    "China",
];
console.log("Original order:");
console.log(placesToVisit);
console.log("Alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().join(","));
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
console.log(" Alphabetical Order:");
console.log(placesToVisit.sort().join(","));
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.sort().join());
