
function calculate(num1,num2,op){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (op == "+"){
    return num1 + num2;
    }
    else if (op == "-"){
        return num1 - num2;
        }
    else if (op == "*"){
        return num1 * num2;
        }
    else if (op == "/"){
        return num1 / num2;
        }
    }

var text = document.getElementById("result");

var a = document.getElementById("num1");
var b = document.getElementById("num2");
var op = document.getElementById("operator");
button = document.getElementById("button");
function showResult(){
    text.innerHTML = calculate(a.value,b.value,op.value);
}
button.onclick = showResult;