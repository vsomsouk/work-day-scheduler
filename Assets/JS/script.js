// Create live display date and time under header.

let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(currentTime);

function displayDate () {
    document.getElementById("currentDay").innerHTML = currentTime;
};
displayDate();

// Create variables.

var nineAmTime = document.querySelector("#nine-am");
var tenAmTime = document.querySelector("#ten-am");
var elevenAmTime = document.querySelector("#eleven-am");
var twelvePmTime = document.querySelector("#twelve-am");
var onePmTime = document.querySelector("#one-pm");
var twoPmTime = document.querySelector("#two-pm");
var threePmTime = document.querySelector("#three-pm");
var fourPmTime = document.querySelector("#four-pm");
var fivePmTime = document.querySelector("#five-pm")

var saveBtn = document.querySelector("#save");

// Event listener to save button and adding data in local storage.

$("#save").on("click", function() {
    console.log("textarea");
    var textInfo = $(this).attr("text-entry")
    var hourTime = $(textInfo).val();
   
    localStorage.setItem(textInfo,hourTime);
});


// Storing data typed in text area in local storage. 


// Assign color code for each time slot when the hour has passed.


// Assign color code in text area for the current time in time slot.
// Assign color code for each time slot when time hasn't passed (future).
