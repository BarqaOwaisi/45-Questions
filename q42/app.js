function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Calling the make_great function to modify the magicians array
make_great(magicians);
show_magicians(magicians);
