/* Global Variables */
let defualtCountry = 'US';
let lang = '&lang=ar';
let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const apiKey = `&appid=dc8c737815563e4edfc5a2033ef415de&units=imperial`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();


document.getElementById('generate').addEventListener('click', performQuery);
let countryField = document.createElement("input");
countryField.placeholder = "Enter a Country";
countryField.id = 'country';
let holder = document.getElementsByClassName('holder zip')[0];
holder.appendChild(countryField);


// Async POST to post data
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
};

/*
    Function to query from openweather and dynamically updates UI
 */
function performQuery(e) {
    try {

        const zipCode = document.getElementById('zip').value;
        const warn = document.getElementById('required');
        if (zipCode === '') {
            warn.innerText = "Zip code is required";

        } else {
            let content = document.getElementById('feelings').value;
            let country = document.getElementById('country').value;
            warn.innerText = "";

            if (country != null) {
                defualtCountry = country;
            }


            getWeather(baseURL, `${zipCode},${defualtCountry}`, apiKey,)
                .then(function (data) {
                    postData('/add', {
                        temp: data.main.temp,
                        date: newDate,
                        content,
                    }).then(updateUI())
                })
        }

    } catch (e) {
        console.log("error", e);
    }
}

/*
    Fetches data from open weather map API takes URI + api key
 */
const getWeather = async (baseURL, zipCode, key) => {

    const res = await fetch(baseURL + zipCode + key)
    try {

        return await res.json();
    } catch (error) {
        console.log("error", error.code);
        // appropriately handle the error
    }
}
/*
 Update UI with the new data
 */
const updateUI = async () => {
    const request = await fetch('/all')
    try {
        const data = await request.json()
        document.getElementById('date').innerHTML = `Date is : ${data.date}`
        document.getElementById('content').innerHTML = `Your feelings :) ${data.content}`;
        document.getElementById('temp').innerHTML = `Temp :${data.temp}`;

    } catch (e) {
        console.log(e);

    }

}
