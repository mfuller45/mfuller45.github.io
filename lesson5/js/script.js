function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
  }
 
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = day1[day];
var d = new Date();
var day = d.getDay() 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
document.getElementById("dates").innerHTML = dateStr;

document.getElementById("copyright").innerHTML = year

if(today == 'Wednesday') {
  document.getElementById("announcement").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
  document.getElementById("announcement").classList.add("show");
}