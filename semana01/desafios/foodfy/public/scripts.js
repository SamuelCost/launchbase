const recipes = document.querySelectorAll(".recipe")
const ingredient_content = document.querySelector(".content_ingredients")
const preparation_content = document.querySelector(".content_preparation")
const information_content = document.querySelector(".content_information")
const showIng = document.querySelector(".showHideIng")
const showPrep = document.querySelector(".showHidePrep")
const showInfo = document.querySelector(".showHideInfo")

for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`

    })
}

showIng.addEventListener("click", function(){
    if (showIng.textContent === "MOSTRAR"){
        showIng.innerHTML = "ESCONDER"
        ingredient_content.classList.remove("active")
    } else {
        showIng.innerHTML = "MOSTRAR"
        ingredient_content.classList.add("active")
    }
})

showPrep.addEventListener("click", function(){
    if (showPrep.textContent === "MOSTRAR"){
        showPrep.innerHTML = "ESCONDER"
        preparation_content.classList.remove("active")
    } else {
        showPrep.innerHTML = "MOSTRAR"
        preparation_content.classList.add("active")
    }
})

showInfo.addEventListener("click", function(){
    if (showInfo.textContent === "MOSTRAR"){
        showInfo.innerHTML = "ESCONDER"
        information_content.classList.remove("active")
    } else {
        showInfo.innerHTML = "MOSTRAR"
        information_content.classList.add("active")
    }
})