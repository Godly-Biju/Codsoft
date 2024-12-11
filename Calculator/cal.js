// content display on calculator screen
function appendDisplay(content) {
    if (Result.innerText == '0') {
        Result.innerText = content;
    } else {
        Result.innerText += content;
    }
    
}

// Clear values on calculator screen
function clearDisplay() {
    Result.innerText = '0'
}

function calculate() {
    Result.innerText = eval(Result.innerText)
}

function backspace(content){
    if(Result.innerText.length == 1 || Result.innerText == "0"){
        Result.innerText = "0"
    }
    else{
        Result.innerText = Result.innerText.slice(0,-1)

    }
}


