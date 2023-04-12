function add (){
let num1 = document.getElementById('first');
let num2 = document.getElementById("second");
let result = document.getElementsByClassName("output")[0];

let addition = parseInt(num1.value)+parseInt(num2.value);
// console.log(addition);
result.innerHTML = `<h1>Addition is ${addition}</h1>`
}

function sub (){
    let num1 = document.getElementById('first');
    let num2 = document.getElementById("second");
    let result = document.getElementsByClassName("output")[0];
    
    let substraction = parseInt(num1.value)-parseInt(num2.value);
    // console.log(addition);
    result.innerHTML = `<h1>Substraction is ${substraction}</h1>`
    }

    function multiply (){
        let num1 = document.getElementById('first');
        let num2 = document.getElementById("second");
        let result = document.getElementsByClassName("output")[0];
        
        let multiplication = parseInt(num1.value)*parseInt(num2.value);
        // console.log(addition);
        result.innerHTML = `<h1>Multiplication is ${multiplication}</h1>`
        }

        function divide (){
            let num1 = document.getElementById('first');
            let num2 = document.getElementById("second");
            let result = document.getElementsByClassName("output")[0];
            
            let division = parseInt(num1.value)/parseInt(num2.value);
            // console.log(addition);
            result.innerHTML = `<h1>Division is ${division}</h1>`
            }