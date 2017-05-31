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

<<<<<<< HEAD
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
=======

/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function findPhone(num) {
    // First get the zip code from the HTML textbox
    var phone = document.getElementById(num).value;
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful!
                displayPhoneNum(this.responseText);
            } else if (this.status === 404){
                // No postal code found
                displayPhoneNum('{ "areacode" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "https://numverify.com/" + phone;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given zip code
 */
function displayPhoneNum(data){
    var number = JSON.parse(data);
    if(number.country === "none") {
        document.getElementById("number").className = "alert alert-warning";
        document.getElementById("number").innerHTML = "Phone number is not valid"
    } else {
        document.getElementById("number").className = "alert alert-success";
        document.getElementById("number").innerHTML ="Phone number is valid"
>>>>>>> origin/master
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
