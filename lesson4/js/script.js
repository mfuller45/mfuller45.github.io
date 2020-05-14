function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
  }
 let date = new Date() 


    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    document.getElementById("copyright").innerHTML = date.getFullYear();
    document.getElementById("dates").innerHTML = day + ', ' + date + ' ' + month + ' ' + year;