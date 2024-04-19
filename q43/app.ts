function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Calling the make_great function with a copy of the magicians array
const greatMagicians: string[] = make_great([...magicians]);

// Calling the function to show the original magician's names
console.log("Original Magicians:");
show_magicians(magicians);

// Calling the function to show the modified magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
