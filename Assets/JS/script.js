// Create live display date and time under header.

let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(currentTime);

function displayDate () {
    document.getElementById("currentDay").innerHTML = currentTime;
};
displayDate();

// Create variables.
// text area of each time slot
var row1 = document.querySelector("#text-entry1");
var row2 = document.querySelector("#text-entry2");
var row3 = document.querySelector("#text-entry3");
var row4 = document.querySelector("#text-entry4");
var row5 = document.querySelector("#text-entry5");
var row6 = document.querySelector("#text-entry6");
var row7 = document.querySelector("#text-entry7");
var row8 = document.querySelector("#text-entry8");
var row9 = document.querySelector("#text-entry9")

// using querySelectorAll will select the HTML id="save"
var saveBtns = document.querySelectorAll("#save");


// Event listener to save button and adding data in local storage.
// create an array for all the rows to prevent copy & paste the same data
var rows = ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8", "row9"];

// have a loop over array of buttons
saveBtns.forEach(function (saveBtn) {
  // for each button, add an event listener
  saveBtn.addEventListener('click', function() {
    // used 'foreach' towards all rows, will save in local storage
    rows.forEach(function (row) {
      localStorage.setItem(row, window[row].value)
    });
  })
});


// Change colors when time is passed, current or future
var d = new Date();
var currentHour = d.getHours();

rows.forEach(function (row) {
  var value = localStorage.getItem(row)
  // each row element (html file)
  var element = window[row];
  element.value = value;
  var rowHour = element.getAttribute("data");

  // add past class (if current hour is greater than row hour, row will add past css style)
  if(currentHour > rowHour) {
      element.classList.add("past")
  }

  // add present class (if current hour is equal to row hour, row will add present css style)
  if (currentHour == rowHour) {
      element.classList.add("present")
  }
  
  // add future class (if currenthour is less than rowhour, row will add future css style)
  if (currentHour < rowHour) {
      element.classList.add("future")
  }

});

