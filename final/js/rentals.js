const rentals = "https://mfuller45.github.io/final/data/scoots.json";

fetch(rentals)
  .then((response) => response.json())
  .then((rentals) => {
    console.log(rentals);
});