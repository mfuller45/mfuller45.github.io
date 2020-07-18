const rentals = "https://mfuller45.github.io/final/data/scoots.json";

fetch(rentals)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('rhd1').innerHTML = rentals[0].half1;
    document.getElementById('rfd1').innerHTML = rentals[0].full1;
});