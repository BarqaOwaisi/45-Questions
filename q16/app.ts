let guest :string[]=[`Afza`,`Aisha`,`Ayesha`,`Maira`,`Mahira`,`Muniza`,`Aayan`,`Huria`,`Hamza`,`Hassan`]
let message1 :string="Dear Freiend"
let message :string="I want to invite you guys to dinner because I haven't seen some of you in a long time"
for(let i=0; i<guest.length; i++){
    console.log(`${message1}! ${guest[i]}  ${message}`)
}




let unavailable :string= "Hassan";
let newperson : string= "Marium";
guest[9]=newperson
let message2 :string="I would like to invite you guys on dinner."
for(let i=0; i<guest.length; i++){
    console.log(`${message1} ${guest[i]}  ${message2}`)
}
console.log(unavailable , "is unavailable.")

for(let i=0; i<guest.length; i++){
    console.log(`Mr/Ms ${guest[i]} I just found a bigger dinner table, so i am inviting some
 more guest`)
}


guest.unshift('Kashaf')
let newguest :string="Wania"
let index: number = Math.floor(guest.length / 8);
guest.splice(5,0,newguest)
guest.push(`Ujala`)
for(let i=0; i<guest.length; i++){
    console.log(guest[i],message2)
}


