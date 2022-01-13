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
let total = 0;
const max = 20;

while (k < max){
    intArray.push(k);
    if(k % 2){
        total += k;
    }
    k++;
}
// console.log(intArray);
console.log(`La somma degli interi in posizione dispari è ${total}`);


// SNACK 5

const bigArray = [];
const smallArray = [];

let a = 0;
let b = 0;
const bigMax = 30;
const smallMax = 15;

while (a < bigMax){
    bigArray.push(a);
    a++;
}

while (b < smallMax){
    smallArray.push(b);
    b++;
}

while (smallArray.length < bigArray.length){
    const random = Math.floor(Math.random() * 15);
    smallArray.push(random);
}

console.log(`la lunghezza dell' array più piccolo ora è ${smallArray.length}`);
console.log(`la lunghezza dell' array più grande ora è ${smallArray.length}`);