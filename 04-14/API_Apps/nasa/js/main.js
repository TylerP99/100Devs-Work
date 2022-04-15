const myapiKey = "api_key=33geMm1VOhX0myCvZQbEguYWfeoym36wNJn0hvkd"
const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=10&camera=pancam&api_key=DEMO_KEY"
const url2 = "https://api.nasa.gov/planetary/apod?api_key=33geMm1VOhX0myCvZQbEguYWfeoym36wNJn0hvkd"
const url3 = "https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?" + myapiKey

fetch(url3)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector("#mars-rover-img").src = data.url
  })
  .catch(err => {
      console.log(`error ${err}`)
  });