const urltest = "https://na13-pierside-weather.vercel.app/"

//this url outputs temperature like this {"temperature":23}. get it and print it to the console
fetch(urltest)
    .then((response) => response.json())
    .then((data) => {
        const temperature = data.temperature;
        const roundedTemperature = Math.round(temperature);

        if (roundedTemperature < 18) {
            $("#footer-temp").hide();
        } else {
            $("#footer-temp").text("Currently " + roundedTemperature + "°C");
        }
    });