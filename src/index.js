function updateTime() {
  //chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoTime.format("MMMM D, YYYY");
  chicagoTimeElement.innerHTML = `${chicagoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  //new york
  let nYElement = document.querySelector("#new-york");
  let newYorkDateElement = nYElement.querySelector(".date");
  let newYorkTimeElement = nYElement.querySelector(".time");
  let nYTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = nYTime.format("MMMM D, YYYY");
  newYorkTimeElement.innerHTML = `${nYTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  //sao paulo
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let sPTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = sPTime.format("MMMM D, YYYY");
  saoPauloTimeElement.innerHTML = `${sPTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let hmpgCities = document.querySelector("#hmpg-cities");

  hmpgCities.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityTimeZone}</h2>
          <div class="date">${cityTime.format("MMMM D YYYY")}</div>
        </div>
        
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small>
        </div>
   </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let dropdownSelectElement = document.querySelector("#dropdown-cities");
dropdownSelectElement.addEventListener("change", selectedCity);
