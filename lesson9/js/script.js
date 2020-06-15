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
   for (let i = 0; i < towns.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let  birthdate = document.createElement('div');
      let  birthplace = document.createElement('div');
      h2.textContent = towns[i].name + ' ' + towns[i].lastname;
      birthdate.setAttribute('class', 'birth')
      birthdate.textContent = 'Date of Birth: ' + towns[i].birthdate;
      birthplace.setAttribute('class', 'birthplace')
      birthplace.textContent = 'Place of Birth: ' + towns[i].birthplace;
      image.setAttribute('src', towns[i].imageurl);
      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(image);
      document.querySelector('div.towns').appendChild(card);
   }
})
