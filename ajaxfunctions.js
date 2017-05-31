

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
    }
}
