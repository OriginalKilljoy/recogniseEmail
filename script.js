//MODEL
let email = '';
let correct = 'Thank you!';
let incorrect = 'You have entered an invalid email';
let display = '';

//VIEW
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <input onchange="saveEmail(this.value)" type="text" placeholder="Write your email...">
    <div>${display}</div>
    `
}

//CONTROLLER

//Denne legger inputet i variabelen email og kjører containsSymbols() funksjonen
function saveEmail(input){
    email = input;
    containsSymbols()
}

//Denne sjekker om emailen når alle kravene for en valid email, og legger correct i displayet. Hvis ikke legger den incorrect i displayet.
function containsSymbols(){
    if(email.includes('@') && email.includes('.') && email.indexOf('@') < email.indexOf('.') && !email.includes(' ')){
        display = correct;
    }
    else{
        display = incorrect;
    }
    updateView()
}
