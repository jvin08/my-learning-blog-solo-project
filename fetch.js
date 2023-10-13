
const cryptoEl = document.getElementById('crypto')
const weatherEl = document.getElementById('weather')
const weatherIcon = weatherEl.children[0].firstElementChild
const tempEl = weatherEl.children[0].lastElementChild
const cityEl = document.getElementById('city')
const firstBlogEl = document.getElementById('first-blog-post')

// display crypto prices
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2Cethereum%2Cdogecoin&locale=en')
.then(res => {
    if(!res.status){
        throw Error ('there is might be some issues')
    }
    return res.json()
})
.then(data => {   
    for (let i=0; i< data.length; i++) {
        cryptoEl.children[i].innerHTML = `<img src='${data[i].image}' alt=''>  ${data[i].name}: $${data[i].current_price}`
    }
})
.catch(err => console.log(err))

// fetch temperature, city and weather icon
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=27cb05cb763a8a86183d41c2fc229bbd&units=imperial`)
    .then(res => {
        if(!res.status){
            throw Error ('there is might be some issues')
        }
        return res.json()
    })
    .then(data => {
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        tempEl.innerHTML = `${data.main.temp}&#176;F`
        cityEl.innerHTML = data.name
    })
    .catch(err => console.log(err))
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
  navigator.geolocation.getCurrentPosition(success, error, options)
  

  
//get dashboard picture from unsplash
// fetch('https://api.unsplash.com/photos/random/?query=landscape&client_id=9lO1_BrVcQT9dgK2VXwurtooq0P269HGusVmc4zn_mM')
// .then(res => {
//     if(!res.status){
//         throw Error ('there is might be some issues')
//     }
//     return res.json()
// })
// .then(data => {
//     console.log(data);
//     firstBlogEl.style.background = `url(${data.urls.regular}) no-repeat center center`
// })
// .catch(err => console.log(err))
