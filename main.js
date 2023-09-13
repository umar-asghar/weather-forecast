const apikey = "6dcab25a1b2184f5d4af575f371196e0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.querySelector("#text");
const btn = document.querySelector("#btn");



async function weatherdata(CITY) {
    const response = await fetch(apiurl + CITY + `&appid=${apikey}`);
    const data = await response.json();
    const pic = document.querySelector("#photo");
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    var temperatureValue = data.main.temp;
    var firstTwoDigits = temperatureValue.toString().substring(0, 2);
    document.querySelector("#temperature").innerHTML = firstTwoDigits + "°c";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        pic.src = "photos/clouds.png";
        
    }
    else if(data.weather[0].main == "Clear"){
        pic.src = "photos/Clear.jpg"
    }
    else if(data.weather[0].main == "Rain"){
        pic.src = "photos/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        pic.src = "photos/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        pic.src = "photos/mist.png"
    }



    
}
btn.addEventListener("click", ()=>{
weatherdata(searchbox.value);


});