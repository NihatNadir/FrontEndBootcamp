let name = prompt("Adınız nedir?");
document.querySelector('#myName').textContent = name;
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
function showTime(){
    const today = new Date();
    const dayName = days[today.getDay()];
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const currentTime = `${hours}:${minutes}:${seconds} ${dayName}`;
    let clockElement = document.querySelector('#myClock');
    clockElement.textContent = currentTime;
}

setInterval(showTime,1000);
showTime();
