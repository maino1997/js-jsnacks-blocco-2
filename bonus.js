
// SNACK 1 BONUS 

const equaBtn = document.getElementById("equal");
const plusBtn = document.getElementById("plus");
const displaySomma = document.getElementById("sum-display");
const userNum = document.getElementById("userNumber");

const list = [];
let sum = 0;

plusBtn.addEventListener('click' , function (){
    let userNumber = parseInt(userNum.value);
    console.log(userNumber);

    if (list.length < 5){
        list.push(userNumber);
        console.table(list);
    }
    
    
    userNum.value = "";
    
});


equaBtn.addEventListener('click' , function (){

    let c = 0;

    while (c < list.length){
        sum = sum + list[c];
        console.log(list[c]);
        c++;
    }
    displaySomma.innerText = `La somma degli elementi della lista è ${sum}`;
});





// SNACK 2 BONUS 

const inNum = document.getElementById("number-2");
const printBtn = document.getElementById("print");
const printDisplay = document.getElementById("print-display");


printBtn.addEventListener('click' , function (){
   const utenteNum = parseInt(inNum.value);
   

   if(utenteNum % 2){
       printDisplay.innerText = utenteNum + 1;
   } else {
       printDisplay.innerText = utenteNum;
   }
});




// SNACK 3 BONUS

const userIndex = document.getElementById("number-3");
console.log(userIndex);
const showDisplay = document.getElementById("show-display");
const imBtn = document.getElementById("im-btn");
const names = ["giovanni" , "giorgio", "laura" , "giorgia" ,"lucia"];
const surnanames = ["rossi" , "verdi" , "bianchi" , "more" , "peterson" , "manganelli"];

const newArray = [];

let person ="";
while (newArray.length < 3){
    const rndIndex1 = Math.floor(Math.random() * names.length);
    const rndIndex2 =  Math.floor(Math.random() * surnanames.length);
    const currentName =  names[rndIndex1];
    const currentSurname = surnanames[rndIndex2];

     person = `${currentName} ${currentSurname}`;

    if (!newArray.includes(person)){ 
    newArray.push(person);
}
}
console.log(newArray);

imBtn.addEventListener('click' , function (){
    const userIndexPars = parseInt(userIndex.value);
    console.log(userIndexPars);
    showDisplay.innerText = newArray[userIndexPars];
});


