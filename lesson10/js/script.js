function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }
 
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("dates").innerHTML = dateStr;
document.getElementById("copyright").innerHTML = year;


if (day1[day] == 'Friday') {
    document.getElementById("announce").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("announce").style.display = "block";
}
else {
    document.getElementById("announce").style.display = "none";
}

// Current Weather for Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
});

// Five Day Forecast 
function prestonForecast(id) {
    "https://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";
    fetch(apiURL)
    .then((response) => response.json())
    .then((town) => {
       console.log(town);
       const townList = town.list;
       let daycount = 0;
       for (let i = 0; i < town.list.length; i++ ) {
          let day = townList[i].dt_txt;
          if (day.substr(11, 19) == '12:00:00') {
             daycount += 1;
             let dateParts = day.substr(0,10).split('-');
             let month = monthAbbrNames[+dateParts[1]];
             let date = month + " " + +dateParts[2];
             let dateElement = 'day' + daycount;
             document.getElementById(dateElement).innerHTML = date;
 
             // Get description
             let descriptionLower = townList[i].weather[0].description;
             let description = descriptionLower.charAt(0).toUpperCase() + descriptionLower.slice(1);
             let descriptionElement = 'condition' + daycount;
             document.getElementById(descriptionElement).innerHTML = description;
 
             // Get high
             let temp = Math.round(townList[i].main.temp_max) + " &#176;F";
             let tempElement = 'temp' + daycount;
             document.getElementById(tempElement).innerHTML = temp;
 
             // Get icon
             const imagesrc = 'https://openweathermap.org/img/w/' + townList[i].weather[0].icon + '.png';
             let imageElement = 'icon' + daycount;
             document.getElementById(imageElement).setAttribute('src', imagesrc);
             document.getElementById(imageElement).setAttribute('alt', description);
          }
       }
    });
 }