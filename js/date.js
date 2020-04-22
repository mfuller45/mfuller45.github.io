let date = new Date();

function writedate() {
    // MM/DD/YYYY HH:MM:SS
    let hour = date.getHours();
    var hourText = hour;
    var timeOfDay = 'AM';
    if (hour > 12) {
        hourText = hour - 12;
        timeOfDay = 'PM';
    }
    document.getElementById("copyright").innerHTML = date.getFullYear();
    document.getElementById("lastUpdate").innerHTML = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + hourText + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + timeOfDay;
}