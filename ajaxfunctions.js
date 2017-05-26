
/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function findPhoneNum(num) {
    // First get the phone numerfrom the HTML textbox
    var num = document.getElementById(num).value;
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful!
                displayPlace(this.responseText);
            } else if (this.status === 404){
                // No postal code found
                displayPhoneNum('{ "Number" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "https://numverify.com/" + zip;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given phone numer
 */
function displayPhoneNum(num){
    var number = JSON.parse(data);
    if(number.num === "none") {
        document.getElementById("number").className = "alert alert-warning";
        document.getElementById("number").innerHTML = "Phone number is not valid."
    } else {
        document.getElementById("number").className = "alert alert-success";
        document.getElementById("number").innerHTML = "Your phone Number is valid."
    }
}
