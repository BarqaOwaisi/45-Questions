let guestlist :string[]= [`Afza`,`Aisha`,`Ayesha`,`Maira`,`Mahira`,`Muniza`,`Aayan`,`Huria`,`Hamza`,`Hassan`]
let message :string= "Dear Friend"
let message1 : string= "I want to invite you guys to dinner because I haven't seen some of you in a long time"
for(let i=0; i<guestlist.length; i++){
    console.log(`${message}  ${guestlist[i]}! ${message1}`);
}