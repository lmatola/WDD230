function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");    
}

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;



ducument.addEventListener("DOMContentLoad", function(){
    buildMoDate();
  
    const menuButton = document.querySelector("#menuBtn");
    menuButton.addEventListener("click", menuButton);
  
    let speed = 25;
    let temp = 10;
    buildwc(speed, temp);
  });
  
  function buildMoDate(){
    const dayArray = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday");
    const montArray = ("January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December");
    let lastMod =  new Date(document.lastModified);
    const dayNme = dayArray(lastMod.getDay());
    const monthNme = montArray(lastMod.getMonth());
    const formatteDate = dayName +" "+lastMod.getDate() + " "+monthName+" "+lastMod.getFullYear();
    document.querySelector("#modDate").innerText = formattedDate;
  }
  
  
  function mobileMenu(event){
    const navList = $("#navList");
    navList.classList.toogle("mobileNav");
  }


  function buildwc(speed, temp) {
    let feelTemp = document.getElementById("al");
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    
    console.log(wc);

    wc = Math.floor(wc);

    wc = (wc > temp) ? temp : wc;

    console.log(wc)
    feelTemp.innerHTML = wc;

    }




 
    // function windChill(form) {
    // wind=eval(form.wind.value);
    // temp=eval(form.temp.value);
    // chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
    // 5.81-0.25*wind)*(temp-91.4)+91.4);
    // form.windchill.value = chill;
    // }
    // //  End -->


    var hour, min, sec;

    var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday");
    var month = new Array("January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December");

    var clock = function(){

        var date = new Date();

        hour = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
        min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

        var time = hour + ":" + min + ":" + sec;

        var fullDate = day[date.getDay()] + ", " + date.getDate() + " de " + month[ date.getMonth()] + date.getFullYear();

        console.log(date.getDay());

        document.getElementById("time").innerHTML=time;
        document.getElementById("date").innerHTML=fullDate;
    }

    clock();

    setInterval( function(){
        clock();
    },1000);






    let lastMod =  new Date(document.lastModified);
    const dayNme = dayArray(lastMod.getDay());
    const monthNme = montArray(lastMod.getMonth());
    const formatteDate = dayName +" "+lastMod.getDate() + " "+monthName+" "+lastMod.getFullYear();
    document.querySelector("#modDate").innerText = formattedDate;
  
