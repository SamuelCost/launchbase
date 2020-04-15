const modalOverlay = document.querySelector(".modal_overlay")
const recipes = document.querySelectorAll(".recipe")

for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        const recipeText = recipe.querySelector(".recipe_content").textContent
        const chefRecipe = recipe.querySelector(".chef_recipe").textContent

        modalOverlay.classList.add("active")
        modalOverlay.querySelector(".img_modal").src = `_img/${recipeId}.png`
        modalOverlay.querySelector(".img_modal").alt = `$${recipeId}`
        modalOverlay.querySelector(".text_content").innerHTML = recipeText
        modalOverlay.querySelector(".chef").innerHTML = chefRecipe
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})