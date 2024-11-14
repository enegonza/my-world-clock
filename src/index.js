function updateTime() {
  //chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM D, YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //new york
  let nYElement = document.querySelector("#new-york");
  if (nYElement) {
    let newYorkDateElement = nYElement.querySelector(".date");
    let newYorkTimeElement = nYElement.querySelector(".time");
    let nYTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = nYTime.format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = nYTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //sao paulo
  let sPElement = document.querySelector("#sao-paulo");
  if (sPElement) {
    let saoPauloDateElement = sPElement.querySelector(".date");
    let saoPauloTimeElement = sPElement.querySelector(".time");
    let sPTime = moment().tz("America/Sao_Paulo");

    saoPauloDateElement.innerHTML = sPTime.format("MMMM D, YYYY");
    saoPauloTimeElement.innerHTML = sPTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let hmpgCities = document.querySelector("#hmpg-cities");

  hmpgCities.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM D YYYY")}</div>
        </div>

        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small>
        </div>
   </div>
   <a href="/"> Back to Main</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let dropdownSelectElement = document.querySelector("#dropdown-cities");
dropdownSelectElement.addEventListener("change", selectedCity);
