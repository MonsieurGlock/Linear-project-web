
let typeTrans = document.getElementById('transport-type');
let subBT = document.getElementById('submit');
let numInput = document.getElementById('new-case');
let output = document.getElementById('output');

subBT.addEventListener('click', calAmongOfPass)

function calAmongOfPass(){
    let num = Number(numInput.value);
    let outputHTML = '';
    let theType = typeTrans.value;
    if (Number.isInteger(num) && num >= 0){
        if (theType == 'car'){
            outputHTML = Math.round((-11.7 * num) + 578656)
        }else if(theType == 'train'){
            outputHTML = Math.round((-11.3 * num) + 457952)
        }else{
            outputHTML = Math.round((-0.377* num) +12851)
        }
        if(num < 2000){
            outputHTML += " (อาจมี Error สูง)"
        }
    }else{
        outputHTML = "Input Error"
    }
    
    output.innerHTML = outputHTML;

}


