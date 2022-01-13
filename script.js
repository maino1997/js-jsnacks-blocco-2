// SNACK 1

let i = 0;
let sum = 0;

do{
    const userNumber = parseInt(prompt("inserisci un numero").trim());
    if (!isNaN(userNumber)){
    sum += userNumber;
}
i++;
} while (i < 5);

console.log(sum);



// SNACK 2

const inputNumber = parseInt(prompt("inserisci un numero pari o dispari").trim());

if ( inputNumber % 2){
  console.log(inputNumber + 1);
} else{
    console.log(inputNumber);
}


// SNACK 3

const names = ["giovanni" , "giorgio", "laura" , "giorgia" ,"lucia"];
const surnanames = ["rossi" , "verdi" , "bianchi" , "more" , "peterson" , "manganelli"];

const newArray = [];

while (newArray.length < 3){
    const rndIndex1 = Math.floor(Math.random() * names.length);
    const rndIndex2 =  Math.floor(Math.random() * surnanames.length);
    const currentName =  names[rndIndex1];
    const currentSurname = surnanames[rndIndex2];

    const person = `${currentName} ${currentSurname}`;
    console.log(person);

    if (!newArray.includes(person)){ 
    newArray.push(person);
    }
}

console.table(newArray);


// SNACK 4

const intArray = [];

let k = 0;
const max = 100;

while (k < max){
    intArray.push(k);
    if(k % 2){
        console.log(k);
    }
    k++;
}
// console.log(intArray);
