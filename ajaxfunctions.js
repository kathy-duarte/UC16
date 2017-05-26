function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}
function checkNum(val) {
    if (Number.parseInt(val) || val == "0") {
        return true;
    }
    else {
        return false;
    }
}

function validPhone(phoneNum) {
    var count = phoneNum.length
    if (count == 13 && phoneNum.charAt(0) == '(' && checkNum(phoneNum.charAt(1)) && checkNum(phoneNum.charAt(2)) && checkNum(phoneNum.charAt(3)) && phoneNum.charAt(4) == ')' && checkNum(phoneNum.charAt(5)) && checkNum(phoneNum.charAt(6)) && checkNum(phoneNum.charAt(7)) && phoneNum.charAt(8) == '-' && checkNum(phoneNum.charAt(9)) && checkNum(phoneNum.charAt(10)) && checkNum(phoneNum.charAt(11)) && checkNum(phoneNum.charAt(12))) {
        return true;
    }
    else {
        return false;
    }
}

function CheckPhoneNum(inputId, outputId) {
    var input = document.getElementById(inputId).value;
    var outputText = "";
    if (validPhone(input) == true) {
        outputText = " The number " + input + " is a valid phone number.";
        setValidStyle(outputId);
    }
    else if (validPhone(input) == false) {
        outputText = "The number " + input + " is not a valid phone number.";
        setInvalidStyle(outputId);
    }
    document.getElementById(outputId).innerHTML = outputText;
}
function setInvalidStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "black";
    el.style.fontSize = "25px";
    el.style.borderStyle = "solid";
    el.style.borderColor = "black";
    el.style.borderRadius = "10px";
    el.style.padding = "10px";
}
