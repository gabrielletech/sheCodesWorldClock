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

updateTime();
setInterval(updateTime, 1000);

