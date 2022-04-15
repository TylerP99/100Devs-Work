
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  document.querySelector("p").innerText = data.text
})
.catch(err => {
    console.log(`error ${err}`)
});
