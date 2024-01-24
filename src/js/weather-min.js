const apiKeyPart1 = "ca43f0a";
const apiKeyPart2 = "20cc06e8a3";
const apiKeyPart3 = "356ed80db";
const apiKeyPart4 = "777113";

const weatherApi = apiKeyPart1 + apiKeyPart2 + apiKeyPart3 + apiKeyPart4;

const locationName = "Christchurch,nz";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&APPID=${weatherApi}&units=metric`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const temperature = data.main.temp;
        const roundedTemperature = Math.round(temperature);

        if (roundedTemperature < 18) {
            $("#footer-temp").hide();
        } else {
            $("#footer-temp").text("Currently " + roundedTemperature + "°C");
        }
    });