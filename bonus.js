
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
