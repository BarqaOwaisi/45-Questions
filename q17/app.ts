let guests: string[]=[`Afza`,`Aisha`,`Ayesha`,`Maira`,`Mahira`,`Muniza`,`Aayan`,`Huria`,`Hamza`,`Hassan`]

let newperson :string="Marium"
guests[9]=newperson
let unavailable: string= "Hassan"
let message1: string="Dear Friend"
let message2 :string="I would like to invite you guys on dinner."
for(let i=0; i<guests.length; i++){
    console.log(`${message1} ${guests[i]}  ${message2}`)
}
console.log(unavailable , "is unavailable.")

for(let i=0; i<guests.length; i++){
    console.log(`Mr/Ms ${guests[i]} I just found a bigger dinner table, so i am inviting some
 more guest`)
}


guests.unshift('Kashaf')
let newguest :string="Wania"
let index: number = Math.floor(guests.length / 8);
guests.splice(5,0,newguest)
guests.push(`Ujala`)
for(let i=0; i<guests.length; i++){
    console.log(guests[i],message2)
}

for(let i=0; i<guests.length; i++){
console.log(` ${guests[i]} I just found out that my new dinner table won’t arrive in time for the dinner, and i have space for only two guests.so now i can only invite two guests `)
}

while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

for (let guest of guests) {
    console.log(`${guest}, you're still invited.`);
}


guests.splice(0); 
console.log(guests);