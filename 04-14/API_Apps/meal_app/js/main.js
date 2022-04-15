const url = "https://www.themealdb.com/api/json/v1/1/random.php"

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data.meals[0])
    const meal = data.meals[0]
    const title = meal.strMeal
    const ingredients = getIngredients(meal)
    const image = meal.strMealThumb
    const link = meal.strSource
    const instructions = meal.strInstructions.split(". ")
    const extraInfo = meal.strCategory + " | " + meal.strArea
    const ingrList = document.querySelector("#r-ingr")
    const instrList = document.querySelector("#r-instr")

    document.querySelector("#r-name").innerText = title
    document.querySelector("#r-extra").innerText = extraInfo
    document.querySelector("#r-img").src = image
    document.querySelector("#r-recipe-link").href = link
    deleteChildren(ingrList)
    deleteChildren(instrList)
    
    for( ingr in ingredients )
    {
        const newItem = document.createElement("li")
        newItem.innerText = ingredients[ingr] + " " + ingr
        ingrList.appendChild(newItem)
    }

    instructions.forEach(element => {
        const newItem = document.createElement("li")
        newItem.innerText = element
        instrList.appendChild(newItem)
    });
})
.catch(err => {
    console.log(`error: ${err}`)
})


function deleteChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function getIngredients(meal) {
    let ingr = {}
    for(let i = 1; i <= 20; ++i) {
        if(meal["strIngredient"+i] != "" && meal["strIngredient"+i] != null)
        {
            ingr[meal["strIngredient"+i]] = meal["strMeasure"+i]
        }
    }
    return ingr
}