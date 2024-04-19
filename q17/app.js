var guests = ["Afza", "Aisha", "Ayesha", "Maira", "Mahira", "Muniza", "Aayan", "Huria", "Hamza", "Hassan"];
// let newperson :string="Marium"
// guest[9]=newperson
// let unavailable: string= "Hassan"
// let message1: string="Dear Friend"
// let message2 :string="I would like to invite you guys on dinner."
// for(let i=0; i<guest.length; i++){
//     console.log(`${message1} ${guest[i]}  ${message2}`)
// }
// console.log(unavailable , "is unavailable.")
// for(let i=0; i<guest.length; i++){
//     console.log(`Mr/Ms ${guest[i]} I just found a bigger dinner table, so i am inviting some
//  more guest`)
// }
// guest.unshift('Kashaf')
// let newguest :string="Wania"
// let index: number = Math.floor(guest.length / 8);
// guest.splice(5,0,newguest)
// guest.push(`Ujala`)
// for(let i=0; i<guest.length; i++){
//     console.log(guest[i],message2)
// }
for (var i = 0; i < guests.length; i++) {
    console.log(" ".concat(guests[i], " I just found out that my new dinner table won\u2019t arrive in time for the dinner, and i have space for only two guests.so now i can only invite two guests "));
}
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(guest, ", you're still invited."));
}
guests.splice(0);
console.log(guests);
