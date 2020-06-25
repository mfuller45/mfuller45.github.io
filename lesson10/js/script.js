//Hamburger icon
function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }

//Get Footer Date
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

//Friday Announcement
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

//Get days of the week for 5 day forecast table

function WeekDay(date){
  var weekdays = new Array(
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  );
  var day = (date).getDay();
  return weekdays[day];
}
document.getElementById("day1")

//5 day Forecast
const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1"
let forecastTable = document.getElementById("forecasts");
forecastTable.innerHTML=""
fetch(apiURL_forecast)
    .then(response=>response.json())
    .then((town) => {
        console.log(town);
        let forecastTableData = town.list.filter((element)=>element.dt_txt.includes("18:00:00"))
        for (let i = 0; i < forecastTableData.length; i++) {
            var tableBox = document.createElement('td');
            var img = document.createElement("img");
            img.setAttribute('src','https://openweathermap.org/img/w/' + forecastTableData[i].weather[0].icon + '.png');
            img.setAttribute('alt',forecastTableData[i].weather[0].description)
            var br = document.createElement("br");
            var temp = document.createElement("span");
            temp.textContent = Math.round(forecastTableData[i].main.temp) + ' °F'
            let description = document.createElement("div");
            description.textContent = forecastTableData[i].weather[0].description;
            tableBox.append(img,br,temp,description)
            forecastTable.appendChild(tableBox)
        }
    })