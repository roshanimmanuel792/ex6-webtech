// Ex.6 - JavaScript Styles and Animations (CarePlus Medical Appointment System)

// 1. Digital clock
function pad(n) {
  return n < 10 ? "0" + n : n;
}

function display() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById("time").innerHTML = pad(h) + ":" + pad(m) + ":" + pad(s);
  document.getElementById("today").innerHTML = d.toDateString();
}
display();
setInterval(display, 1000);

// 2. Change the body background every 30 seconds
function setBackgroundColor() {
  // 200-255 keeps the colours soft so text stays readable
  var red = Math.floor(Math.random() * 56) + 200;
  var green = Math.floor(Math.random() * 56) + 200;
  var blue = Math.floor(Math.random() * 56) + 200;
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
  document.getElementById("swatch").style.backgroundColor = color;
  document.getElementById("color-name").innerHTML = color;
}
setBackgroundColor();
setInterval(setBackgroundColor, 30000);

// 3. Increase / decrease font size on mouse over / out
function incSize() {
  document.getElementById("para1").style.fontSize = "28px";
}

function decSize() {
  document.getElementById("para1").style.fontSize = "18px";
}

// 4. Move the clinic van with setTimeout and stop it with clearTimeout
var imgObj = null;
var animate = null;

function init() {
  imgObj = document.getElementById("img");
  imgObj.style.left = "0px";
}

function moveRight() {
  clearTimeout(animate);
  var left = parseInt(imgObj.style.left) + 1;
  var maxLeft = document.getElementById("track").offsetWidth;
  if (left > maxLeft) {
    left = -imgObj.offsetWidth; // drive in again from the left edge
  }
  imgObj.style.left = left + "px";
  animate = setTimeout(moveRight, 10);
}

function stop() {
  clearTimeout(animate);
  imgObj.style.left = "0px";
}

window.onload = init;

// 5. Array of patient objects grouped by year of birth
var student = [
  { name: "John", r_num: "CP13AP129", dob: "20-apr-1995" },
  { name: "Joseph", r_num: "CP13AP456", dob: "05-jan-1998" },
  { name: "Priya", r_num: "CP21AP104", dob: "14-mar-2002" },
  { name: "Arun", r_num: "CP20AP087", dob: "30-sep-2000" },
  { name: "Meera", r_num: "CP16AP221", dob: "11-dec-1999" },
  { name: "Kavin", r_num: "CP22AP015", dob: "02-jul-2004" }
];

var list = document.getElementById("student-list");
var before = document.getElementById("before2000");
var after = document.getElementById("after2000");
var countBefore = 0;
var countAfter = 0;

for (var i = 0; i < student.length; i++) {
  var year = parseInt(student[i].dob.split("-")[2]);
  list.innerHTML += "<li>" + student[i].name + "'s Register Number is <b>" + student[i].r_num + "</b></li>";
  if (year < 2000) {
    before.innerHTML += "<li>" + student[i].name + " (" + year + ")</li>";
    countBefore++;
  } else {
    after.innerHTML += "<li>" + student[i].name + " (" + year + ")</li>";
    countAfter++;
  }
}
document.getElementById("count-before").innerHTML = countBefore;
document.getElementById("count-after").innerHTML = countAfter;
