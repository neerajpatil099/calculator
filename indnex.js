// class Calculator{
//     constructor(previousOperandTextElement,currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }

//     clear(){
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }

//     delete(){

//     }

//     appendNumber(number){
//     if(number==='.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     chooseOperation(operation){

//     }

//     compute(){

//     }

    
// }

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
let string = "";
const input = document.querySelector('input')

// const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        }else if(e.target.innerHTML == 'AC'){
          input.value = "";
          string = "";
        }
        else if (input.value.length >= 14){
            input.value = "maximum limit"
        }
        else if (input.value = ''){
            input.value = "maximum limit"
        }
        else if(e.target.innerHTML == 'DEL'){
           string = string.slice(0,string.length - 1);
           input.value = string;

        }
         else{
        string += e.target.innerHTML;
        input.value = string; 
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    })
});

