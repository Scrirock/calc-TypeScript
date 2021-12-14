import "./ts/script.ts";
import "./scss/style.scss";

let allKey = document.querySelectorAll(".key") as NodeListOf<Element>;
let screen = document.querySelector("#screen") as HTMLDivElement;
let number1: string = "";
let number2: string = "";
let operator: string;

for (let i: number = 0; i < allKey.length; i++) {
    allKey[i].addEventListener("click", ()=>{
        switch (allKey[i].innerHTML) {
            case "+":
                operator = "+";
                screen.innerHTML += " " + operator
                break;
            case "-":
                operator = "-";
                screen.innerHTML += " " + operator
                break;
            case "*":
                operator = "*";
                screen.innerHTML += " " + operator
                break;
            case "/":
                operator = "/";
                screen.innerHTML += " " + operator
                break;
            case "C":
                operator = "";
                number1 = "";
                number2 = "";
                screen.innerHTML = "";
                break;
            case ".":
                if (!operator){
                    number1 += ".";
                    screen.innerHTML = number1;
                }
                else {
                    number2 += ".";
                    screen.innerHTML = number1 + " " + operator + " " + number2
                }
                break;
            case "=":
                let nbr1: number = parseFloat(number1);
                let nbr2: number = parseFloat(number2);
                if (operator === "+"){
                    screen.innerHTML = (nbr1 + nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "-"){
                    screen.innerHTML = (nbr1 - nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "*"){
                    screen.innerHTML = (nbr1 * nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "/"){
                    screen.innerHTML = (nbr1 / nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                break;
            default:
                if (!operator){
                    number1 += allKey[i].innerHTML;
                    screen.innerHTML = number1;
                }
                else {
                    number2 += allKey[i].innerHTML;
                    screen.innerHTML = number1 + " " + operator + " " + number2
                }
                break;
        }
    })
}