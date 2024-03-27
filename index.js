const numberInput = document.getElementById("number")
const output = document.getElementById("output")
const submitBtn = document.getElementById("convert-btn")

submitBtn.addEventListener('click', updateOutput)

const numLookup = {
    3000 : "MMM",
    2000 : "MM",
    1000 : "M",
    900 : "CM",
    800 : "DCCC",
    700 : "DCC",
    600 : "DC",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    80: "LXXX",
    70: "LXX",
    60: "LX",
    50: "L",
    40 : "XL",
    30 : "XXX",
    20 : "XX",
    10 : "X",
    9: "IX",
    8: "VIII",
    7: "VII",
    6: "VI",
    5: "V",
    4: "IV",
    3: "III" ,
    2: "II" ,
    1: "I" ,
    0: ""
}
function updateOutput(){
    const num = numberInput.value

    const calculate = () => {
        let count = 0;
        const numberArray = num.toString().split("");
        for(let i = numberArray.length - 1; i >= 0; i--){
            const key = numberArray[i] * Math.pow(10, count);
            if(numLookup[key]){
                numberArray[i] = numLookup[key]
            } else {numberArray[i] = ""}
            count++
        }
        return numberArray.join("")
    };

    function checkIfValidNumber (){
        if(num <= 0){
            return output.innerText = "Please enter a number greater than or equal to 1";
        } else if(num >= 4000) {
            return output.innerText = "Please enter a number less than or equal to 3999";
        }
        else {
            return output.innerText = calculate(num);
        }
    }
    num? output.innerText = checkIfValidNumber() : output.innerText = "Please enter a valid number";
}