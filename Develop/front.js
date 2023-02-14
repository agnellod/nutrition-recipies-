/**pseu
 * create funtion with api and link with the key and id (fetch and .then)
 * 
 * 
 * make some kind of for loop using if and else statments loops through data from api 
 *  -for loop should only go up to 10
 * in this function target ids in html for where to populate data
 * if nothing is selected then populates with unfiltered data
 * 
 */





const searchButtonEl = document.querySelector('.is-info');

function switchToSecondPage(event) {
    event.preventDefault();
    
    const searchInputVal = document.querySelector('.input').value;
    const dietaryRestVal = document.querySelectorAll('.checkbox');
   dietaryRestVal.forEach(element => {
    console.log(element);
   });

    // const apiKey = '356844f53ca5f3e2604e67318c228565';
    // const id = 'eceea0f0';
    // var search =document.getElementById("#box-1")


    if (!searchInputVal) {
        console.error('Please enter food to search');
        return;
    }

    const queryString = './secondpage.html?q=' + searchInputVal + '&health=' + dietaryRestVal;
    
    // location.assign(queryString);
    location.assign(queryString)
}

searchButtonEl.addEventListener('click', switchToSecondPage);






var randomRecipe = function(){
    var frontApi = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(frontApi)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        document.body.onload = addElement;
        addElement(data);
            console.log(data)
            
        })
    
}
randomRecipe();
        
function addElement(data) {
    // create a new div element
    const newDiv = document.createElement("div");
    
    // and give it some content
    const newContent = document.createElement("h1");
    newContent.textContent = data.meals[0].strMeal;
    newContent.classList.add("has-text-black", "is-size-2", "has-text-centered", "p-2")
    const newImg = document.createElement("img");
    newImg.setAttribute('src', data.meals[0].strMealThumb);
    const ingredientsList = document.createElement("ul");
    const ingredient1 = document.createElement("li");
    ingredient1.textContent = data.meals[0].strIngredient1;
    const ingredient2 = document.createElement("li");
    ingredient2.textContent = data.meals[0].strIngredient2;
    const ingredient3 = document.createElement("li");
    ingredient3.textContent = data.meals[0].strIngredient3;
    const ingredient4 = document.createElement("li");
    ingredient4.textContent = data.meals[0].strIngredient4;
    const ingredient5 = document.createElement("li");
    ingredient5.textContent = data.meals[0].strIngredient5;
    const ingredient6 = document.createElement("li");
    ingredient6.textContent = data.meals[0].strIngredient6;
    const ingredient7 = document.createElement("li");
    ingredient7.textContent = data.meals[0].strIngredient7;
    const ingredient8 = document.createElement("li");
    ingredient8.textContent = data.meals[0].strIngredient8;
    const ingredient9 = document.createElement("li");
    ingredient9.textContent = data.meals[0].strIngredient9;
    const ingredient10 = document.createElement("li");
    ingredient10.textContent = data.meals[0].strIngredient10;
    const ingredient11 = document.createElement("li");
    ingredient11.textContent = data.meals[0].strIngredient11;
    const ingredient12 = document.createElement("li");
    ingredient12.textContent = data.meals[0].strIngredient12;
    const ingredient13 = document.createElement("li");
    ingredient13.textContent = data.meals[0].strIngredient13;
    const ingredient14 = document.createElement("li");
    ingredient14.textContent = data.meals[0].strIngredient14;
    const ingredient15 = document.createElement("li");
    ingredient15.textContent = data.meals[0].strIngredient15;
    const ingredient16 = document.createElement("li");
    ingredient16.textContent = data.meals[0].strIngredient16;
    const ingredient17 = document.createElement("li");
    ingredient17.textContent = data.meals[0].strIngredient17;
    const ingredient18 = document.createElement("li");
    ingredient18.textContent = data.meals[0].strIngredient18;
    const ingredient19 = document.createElement("li");
    ingredient19.textContent = data.meals[0].strIngredient19;
    const ingredient20 = document.createElement("li");
    ingredient20.textContent = data.meals[0].strIngredient20;
    const instructions = document.createElement("p");
    instructions.textContent = data.meals[0].strInstructions;
    instructions.classList.add("has-text-black", "has-text-centered");
    const source = document.createElement("a");
    source.textContent = data.meals[0].strSource;
    source.classList.add("has-text-centered");
    



    ingredientsList.appendChild(ingredient1);
    ingredientsList.appendChild(ingredient2);
    ingredientsList.appendChild(ingredient3);
    ingredientsList.appendChild(ingredient4);
    ingredientsList.appendChild(ingredient5);
    ingredientsList.appendChild(ingredient6);
    ingredientsList.appendChild(ingredient7);
    ingredientsList.appendChild(ingredient8);
    ingredientsList.appendChild(ingredient9);
    ingredientsList.appendChild(ingredient10);
    ingredientsList.appendChild(ingredient11);
    ingredientsList.appendChild(ingredient12);
    ingredientsList.appendChild(ingredient13);
    ingredientsList.appendChild(ingredient14);
    ingredientsList.appendChild(ingredient15);
    ingredientsList.appendChild(ingredient16);
    ingredientsList.appendChild(ingredient17);
    ingredientsList.appendChild(ingredient18);
    ingredientsList.appendChild(ingredient19);
    ingredientsList.appendChild(ingredient20);


    
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    newDiv.append(newImg);
    newDiv.append(ingredientsList);
    newDiv.appendChild(instructions);
    newDiv.appendChild(source);
// add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("display-recipe");
        currentDiv.appendChild(newDiv);
            }








// BELOW IS TRYING TO RUN A FOR LOOP THROUGH THE CHECKBOXES AFTER EVENT LISTENER IS APPLIED TO EACH CHECKBOX AND THEN RUNNING THROUGH FUNCTION TO APPLY API 
var checkedBox = document.getElementById('#checkbox');

    



function recipeApiFunc(check) {
    
    for (let i = 0; i < checkedBox.length; i++) {
        console.log([i]);
        };

const dietOptions = {method: 'GET'};

// const recipeApi = `https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=vegan`;
// const recipeApiSelec = recipeApi.hits;

var Url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=dairy-free`

fetch(Url, dietOptions)
.then(function (response) {
    return response.json()
})
.then(function(data){
    console.log("diet options fetch", data); 
    // recipeApiSelec.append(dietaryRestVal);      
})

const checkedPreference = check + dietOptions;
              console.log(checkedPreference);
              checkedBox.appendChild(checkedPreference)

}
 
document.getElementById('btn').onclick = function() {  
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
  for (var checkbox of markedCheckbox) {  
    document.body.append(checkbox.value + ' ');  
  }  
}  

checkedBox.addEventListener('click', recipeApiFunc());            


            //LOCAL STORAGE FOR FAVORITES 
    // var inputEmail= document.getElementById("email");
    // localStorage.setItem("email", inputEmail.value);

    // var storedValue = localStorage.getItem("email");

