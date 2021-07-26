const weather = document.querySelector(".js-weather");

const API_KEY = 'cbd6f57b9017bb51541cb768e03ad366';
const LOCATION = 'location';

function getWeather(latitude, longitude){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(function(response){
       return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    })
}
function saveLocation(locationObj){
    localStorage.setItem(LOCATION, JSON.stringify(locationObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationObj = {
        latitude,
        longitude
    };
    saveLocation(locationObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log("Can't access geo location");
}

function askForLocation() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);  
}

function loadLocation() {
    const loadedLocation = localStorage.getItem(LOCATION);
    if(loadedLocation === null) {
        askForLocation();
    } else {
        const parsedLocation = JSON.parse(loadedLocation);
        getWeather(parsedLocation.latitude, parsedLocation.longitude);
    }
}

function init() {
    loadLocation();
}

init();