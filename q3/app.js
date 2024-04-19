// Practising cases//
var username = "barqa";
console.log("lowercase", username.toLowerCase());
console.log("uppercase", username.toLocaleUpperCase());
console.log("tittlecase", username.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
