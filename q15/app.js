var guest = ["Afza", "Aisha", "Ayesha", "Maira", "Mahira", "Muniza", "Aayan", "Huria", "Hamza", "Hassan"];
var message = "Dear Friend";
var message1 = "I want to invite you guys to dinner because I haven't seen some of you in a long time";
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(message, "  ").concat(guest[i], "! ").concat(message1));
}
var unavailable = "Hassan";
var newperson = "Marium";
guest[9] = newperson;
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(message, "  ").concat(guest[i], "! ").concat(message1));
}
console.log(unavailable, "is unavailable");
var subjects = ["\n", "Bio", "P.S.T", "Chem", "Math", 'Urdu', "Physics\n"];
var line = "I am studing";
for (var i = 0; i < subjects.length; i++) {
    console.log(line, subjects[i]);
}
var oldsubject = "Urdu";
var newsubject = "Sindhi";
subjects[4] = newsubject;
for (var i = 0; i < subjects.length; i++) {
    console.log(line, subjects[i]);
}
console.log("".concat(oldsubject, " is replaced with ").concat(newsubject));
