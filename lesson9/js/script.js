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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   const newTowns = towns.filter((town) => {
      if(town.name=="Preston", town.name=="Soda Springs", town.name=="Fish Haven"){
      }
   });
   for (let i = 0; i < newTowns.length; i++) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let image = document.createElement('img');
      let yearFounded = document.createElement('h3');
      let currentPopulation = document.createElement('h3');
      let averageRainfall = document.createElement('h3');
      name.textContent = newTowns.name;
      motto.textContent = newTowns.motto;
      currentPopulation.textContent = 'Population: ' + newTowns.currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + newTowns.averageRainfall;
      yearFounded.textContent = 'Year Founded: ' + newTowns.yearFounded;
      yearFounded.setAttribute('class', 'yearFounded');
      currentPopulation.setAttribute('class', 'currentPopulation');
      averageRainfall.setAttribute('class', 'averageRainfall');
      image.setAttribute('src', newTowns.imageurl);
      image.setAttribute('alt', newTowns.name);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(currentPopulation);
      card.appendChild(averageRainfall);
      card.appendChild(image);
      document.querySelector('div.newTowns').appendChild(card);
   }
});
