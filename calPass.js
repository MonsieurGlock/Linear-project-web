
let typeTrans = document.getElementById('transport-type');
let subBT = document.getElementById('submit');
let numInput = document.getElementById('new-case');
let output = document.getElementById('output');

subBT.addEventListener('click', calAmongOfPass)

function calAmongOfPass(){
    // console.log("Work")
    let num = Number(numInput.value);
    let outputHTML = '';
    let theType = typeTrans.value;
    if (theType == 'car'){
        outputHTML = (-11.7 * num) + 578656
    }else if(theType == 'train'){
        outputHTML = (-11.3 * num) + 457952
    }else{
        outputHTML = (-0.377* num) +12851
    }
    output.innerHTML = outputHTML;

}


