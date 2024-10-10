function updateTime() {
    // Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM do yyyy");

losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss')} <span>${losAngelesTime.format("A")}</span>` 

// Brisbane
let brisbaneElement = document.querySelector("#brisbane");
let brisbaneDateElement = brisbaneElement.querySelector(".date");
let brisbaneTimeElement = brisbaneElement.querySelector(".time");
let brisbaneTime = moment().tz("Australia/Brisbane");
brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM do yyyy");

brisbaneTimeElement.innerHTML = `${brisbaneTime.format('h:mm:ss')} <span>${brisbaneTime.format("A")}</span>` 
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    //set current timezone
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
   // console.log(cityTimeZone);
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
   // console.log(cityTime.format("MMMM Do YYYY"));
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="container-display">
            <div class="city-date">
                <h2 class="city">${cityName}</h2>
                <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
            </div>
            <div>
                <div class="time">${cityTime.format("h:mm:ss")}<span class="time-span">${cityTime.format("A")}</span></div>
            </div>
        </div>
    `
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);