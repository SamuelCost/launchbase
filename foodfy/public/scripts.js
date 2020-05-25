const recipes = document.querySelectorAll(".recipe")
const ingredient_content = document.querySelector(".content_ingredients")
const preparation_content = document.querySelector(".content_preparation")
const information_content = document.querySelector(".content_information")
const showIng = document.querySelector(".showHideIng")
const showPrep = document.querySelector(".showHidePrep")
const showInfo = document.querySelector(".showHideInfo")
const currentPage = location.pathname
const menuAdmin = document.querySelectorAll(".logoAdmin a")

for (menu of menuAdmin){
    if (currentPage.includes(menu.getAttribute("href"))){
        menu.classList.add("active")
    }
}

for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/foodfy/recipes/${recipeId}`
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

function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  preparations.appendChild(newField);
}
  
document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
document.querySelector(".add-preparation").addEventListener("click", addPreparation);