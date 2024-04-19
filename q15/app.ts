let guest: string[]=[`Afza`,`Aisha`,`Ayesha`,`Maira`,`Mahira`,`Muniza`,`Aayan`,`Huria`,`Hamza`,`Hassan`]
let message :string= "Dear Friend"
let message1 : string= "I want to invite you guys to dinner because I haven't seen some of you in a long time"
for(let i=0; i<guest.length; i++){
    console.log(`${message}  ${guest[i]}! ${message1}`);
}

let unavailable: string="Hassan";
let newperson: string="Marium";
guest[9]= newperson
for(let i=0; i<guest.length; i++ ){
    console.log(`${message}  ${guest[i]}! ${message1}`)
}
console.log(unavailable, `is unavailable`)






let subjects: string[]=[`\n`,`Bio`,`P.S.T`,`Chem`,`Math`,'Urdu',`Physics\n`]
let line: string="I am studing"
for(let i=0; i<subjects.length; i++){
    console.log(line,subjects[i])
}

let oldsubject: string="Urdu";
let newsubject: string="Sindhi"
subjects[4]=newsubject
for(let i=0; i<subjects.length; i++){
    console.log(line,subjects[i])
}
console.log(`${oldsubject} is replaced with ${newsubject}`);



