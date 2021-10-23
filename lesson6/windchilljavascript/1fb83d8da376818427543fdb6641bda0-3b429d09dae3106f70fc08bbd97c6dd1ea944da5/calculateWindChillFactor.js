'use strict';

/**
 * Calculate the wind chill factor
 * @see https://www.weather.gov/media/epz/wxcalc/windChill.pdf
 *
 * @param  {Float} temperature - temperature in Fahrenheit
 * @param  {Float} windSpeed - wind speed in miles per hour
 * @return {Float}
 */
function calculateWindChillFactor(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;
}

const temp = 72,
      windSpeed = 5.5;

console.log(
  `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`
);



ducument.addEventListener("DOMContentLoad", function(){
  buildMoDate();

  const menuButton = document.querySelector("#menuBtn");
  menuButton.addEventListener("click", menuButton);

  let speed = 25;
  let temp = 10;
  buildWC(speed, temp);
});

function buildMoDate(){
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"];
  const montArray = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];
  let lastMod =  new Date(document.lastModified);
  const dayNme = dayArray[lastMod.getDay()];
  const monthNme = montArray[lastMod.getMonth()];
  const formatteDate = dayName +" "+lastMod.getDate() + " "+monthNme+" "+lastMod.getFullYear();
  document.querySelector("#modDate").innerText = formattedDate;
}


function mobileMenu(event){
  const navList = $("#navList");
  navList.classList.toogle("mobileNav");
}