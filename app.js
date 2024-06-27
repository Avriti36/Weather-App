const Appurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const AppKey="ea5139e0a2233ca5cc3c4f8de671733d";
const searchBar=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icons");



async function Weather(city){
    const respone = await fetch(Appurl+city+`&appid=${AppKey}`);
if(respone.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".weather").style.display="none";

}
else{


    var data= await respone.json();
    console.log(data);
document.querySelector(".city").innerHTML=data.name;

document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+'°C';

if(data.weather[0].main=="Clouds"){
    weatherIcon.src= "images/cloud.png";

}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src= "images/clear.png";

}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src= "images/mist.png";

}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src= "images/rain.png";

}

else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src= "images/drizzle.png";

}

document.querySelector(".weather").style.display="block"
document.querySelector(".error").style.display="none";

}
}
searchBtn.addEventListener('click', ()=>{
    Weather(searchBar.value);

 
})
