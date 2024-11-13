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

  //gaza
  let gazaElement = document.querySelector("#gaza");
  let gazaDateElement = gazaElement.querySelector(".date");
  let gazaTimeElement = gazaElement.querySelector(".time");
  let gazaTime = moment().tz("Asia/Gaza");

  gazaDateElement.innerHTML = gazaTime.format("MMMM D, YYYY");
  gazaTimeElement.innerHTML = `${gazaTime.format(
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

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM D, YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;
}

updateTime();
setInterval(updateTime, 1000);
