var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the make_great function with a copy of the magicians array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Calling the function to show the original magician's names
console.log("Original Magicians:");
show_magicians(magicians);
// Calling the function to show the modified magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
