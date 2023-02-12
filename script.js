var cardWrap = document.querySelector('#center');

(async function () {
    const res = await fetch('https://restcountries.com/v2/all')

    Data = await res.json()

    let countryData = [Data[104], Data[117], Data[208]]

    console.log(countryData)

    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryData[0].latlng[0]}&lon=${countryData[0].latlng[1]}&appid=2973927ca5bc8ecb5fde3b393d8021a7`)
    const res3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryData[1].latlng[0]}&lon=${countryData[1].latlng[1]}&appid=2973927ca5bc8ecb5fde3b393d8021a7`)
    const res4 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryData[2].latlng[0]}&lon=${countryData[2].latlng[1]}&appid=2973927ca5bc8ecb5fde3b393d8021a7`)


    var weatherapiData1 = await res2.json()
    var weatherapiData2 = await res3.json()
    var weatherapiData3 = await res4.json()
    var weatherData = [weatherapiData1, weatherapiData2, weatherapiData3]
    console.log(weatherData)
    for (i = 0; i < countryData.length; i++) {
        cardWrap.innerHTML +=
            `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-2" style="min-width: 18rem;">
           <div class="card h-100 " style="width: 18rem;">
              <div class="card-header header"><b>Country Name:${countryData[i].name}</b></div>
              <div><img class="card-img-top image" src="${countryData[i].flag}" class="card-img-top" alt="..."></div>
              <div class="card-body text-center">
                  <div class="card-text">Native Name: ${countryData[i].nativeName}</div>

                  <div class="card-text"> Capital: ${countryData[i].capital}</div>
                  <div class="card-text">Population: ${countryData[i].population}</div>
                  <div class="card-text">Region: ${countryData[i].region}</div>
                  <div class="card-text">Country Code: ${countryData[i].cioc}</div>
                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${i}">Click for Weather</button>
                </div>
            </div>
        </div>
<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Weather Update </h1>
        <button type="button" class="btn-close cross" data-dismiss="modal" aria-label="Close">&cross;</button>
      </div>
      <div class="modal-body">
        <h3 class="text-muted">${countryData[i].name}</h3> 
        <br>
        <div><span><b>Latitude:</b> ${countryData[i].latlng[0]} </span>&nbsp; &nbsp; <span><b>Longitude:</b> ${countryData[i].latlng[1]} </span></div>
        <div><span><b>Temprature</b> ${weatherData[i].main.temp} </span></div>
        <div><span><b>Pressure: </b> ${weatherData[i].main.pressure} </span></div>
        <div><span><b>Humidity: </b> ${weatherData[i].main.humidity} </span></div>

        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>`
    }

})();



