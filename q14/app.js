var guestlist = ["Afza", "Aisha", "Ayesha", "Maira", "Mahira", "Muniza", "Aayan", "Huria", "Hamza", "Hassan"];
var message = "Dear Friend";
var message1 = "I want to invite you guys to dinner because I haven't seen some of you in a long time";
for (var i = 0; i < guestlist.length; i++) {
    console.log("".concat(message, "  ").concat(guestlist[i], "! ").concat(message1));
}
