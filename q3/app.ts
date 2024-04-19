// Practising cases//

let username : string="barqa"
console.log("lowercase",username.toLowerCase())

console.log("uppercase",username.toLocaleUpperCase())

console.log("tittlecase",username.replace(/\b\w/g, (char) => char.toUpperCase()))
