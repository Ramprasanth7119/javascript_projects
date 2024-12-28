const APIKEY = "afca847a20b75acc32c8515efc24f040";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function weatherCheck(city) {

    const response = await fetch(`${APIKEY}&q=${city}&appid=${APIKEY}`);

    if(response.status == 404){

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else{

        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km / h";


        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } 
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
    document.addEventListener("DOMContentLoaded", ()=>{

        searchButton.addEventListener("click",()=>{
            var city = searchBox.value.trim();
            if(city){
                weatherCheck(city)
            } else{
                alert("Enter a correct city name");
            }
        });

        searchBox.addEventListener("keydown",(event)=>{

                if(event.key == "Enter"){

                    var city = searchBox.value.trim();

                    if(city){

                        weatherCheck(city);

                    } else{

                    alert("Enter a correct city name");
                    
                }
            }
        });
        
    });