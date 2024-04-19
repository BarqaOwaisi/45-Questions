var guest = ["Afza", "Aisha", "Ayesha", "Maira", "Mahira", "Muniza", "Aayan", "Huria", "Hamza", "Hassan"];
var message1 = "Dear Freiend";
var message = "I want to invite you guys to dinner because I haven't seen some of you in a long time";
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(message1, "! ").concat(guest[i], "  ").concat(message));
}
var unavailable = "Hassan";
var newperson = "Marium";
guest[9] = newperson;
var message2 = "I would like to invite you guys on dinner.";
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(message1, " ").concat(guest[i], "  ").concat(message2));
}
console.log(unavailable, "is unavailable.");
for (var i = 0; i < guest.length; i++) {
    console.log("Mr/Ms ".concat(guest[i], " I just found a bigger dinner table, so i am inviting some\n more guest"));
}
guest.unshift('Kashaf');
var newguest = "Wania";
var index = Math.floor(guest.length / 8);
guest.splice(5, 0, newguest);
guest.push("Ujala");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i], message2);
}
