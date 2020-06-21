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
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";
fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    const townList = town.list;
    let counter = 0;
    for (let i = 0; i < townList.length; i++ ) {
        let day = townList[i].dt_txt;
        if (day.substr(11, 19) == '18:00:00') {
            counter++
            /*Get correct day for forecast*/
            /*Display as Month/Day*/
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let monthDate = parseInt((day[5] + day[6]) - 1);
            let date = day[8] + day[9];
            let month = months[monthDate];
            let fullDate = month + " " + date;
            let dateElement = 'date' + counter;
            document.getElementById(dateElement).innerHTML = fullDate;

            /*Get description*/
            let discriptionLower = townList[i].weather[0].description;
            let discription = discriptionLower.charAt(0).toUpperCase() + discriptionLower.slice(1);
            let discriptionElement = 'condition' + counter;
            document.getElementById(discriptionElement).innerHTML = discription;

            /*Get temp-max*/
            let temp = Math.round(townList[i].main.temp_max) + " &#176;F";
            let tempElement = 'day' + counter + '_weather';
            document.getElementById(tempElement).innerHTML = temp;

            /*Icon for weather*/
            const imagesrc = 'https://openweathermap.org/img/w/' + townList[i].weather[0].icon + '.png';
            let imageElement = 'weather_icon' + counter;
            document.getElementById(imageElement).setAttribute('src', imagesrc);
            document.getElementById(imageElement).setAttribute('alt', discription);
        }
    }
  });
}