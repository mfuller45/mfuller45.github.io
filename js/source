var today = new Date();
var year = today.getFullYear();
var lastModified = new Date(document.lastModified);

let daysInMonth = createNumArray(0, 32);
let months = createNumArray(0, 13);
let hours = createNumArray(0, 24);
let min = createNumArray(0, 60);
let sec = createNumArray(0, 60);

var modDay, modMonth, modYear, modHour, modMin, modSec;

modDay = daysInMonth[lastModified.getDate()];
modMonth = months[lastModified.getMonth()];
modYear = lastModified.getFullYear();
modHour = hours[lastModified.getHours()];
modMin = min[lastModified.getMinutes()];
modSec = sec[lastModified.getSeconds()];

function copyYear() {
    document.getElementById("copyright").innerHTML = " " + year;
    document.getElementById("lastUpdate").innerHTML = "Last Updated: " + modMonth + "/" + modDay + "/" + modYear + " " + modHour + ":" + modMin + ":" + modSec;
};

function createNumArray(start, count) {
    let array = [];
    for (var i = start; i < count; ++i) {
        if (i < 10) {
            array[i] = "0" + i;
        } else {
            array[i] = "" + i + "";
        }

    }
    return array;
};