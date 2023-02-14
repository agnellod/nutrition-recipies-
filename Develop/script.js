const apiKey = '356844f53ca5f3e2604e67318c228565';
const id = 'eceea0f0';


var query = document.location.href
console.log(query);

var urlSplitq = query.split('q=')[1].split('&health=')[0];
var urlSplitHealth = query.split('&health=')[1];
console.log(urlSplitHealth);
var healthStr = "";
healthStr && `&health=${urlSplitHealth}`;
var search =document.getElementById("#box-1");
var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${urlSplitq}&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565${healthStr}`;

fetch(url)
.then(function (response) {
    return response.json()
})
.then(function(data){
    const box1 = document.createElement("div");
    
    const titleEl = document.createElement("h1")
    titleEl.textContent = data.hits[0].recipe.label;
    titleEl.classList.add("has-text-black", "is-size-2", "has-text-centered", "p-2")
    box1.appendChild(titleEl);    
    
    const imgEl = document.createElement("img");
    imgEl.setAttribute('src', data.hits[0].recipe.image);
    box1.appendChild(imgEl);
   
    const ulEl = document.createElement("ul");
    box1.appendChild(ulEl)
    
    const ingredient1 = document.createElement("li");
    ingredient1.textContent = data.hits[0].recipe.ingredientLines[0];
    ulEl.appendChild(ingredient1);
    
    const ingredient2 = document.createElement("li");
    ingredient2.textContent = data.hits[0].recipe.ingredientLines[1];
    ulEl.appendChild(ingredient2);
    
    const ingredient3 = document.createElement("li");
    ingredient3.textContent = data.hits[0].recipe.ingredientLines[2];
    ulEl.appendChild(ingredient3);
   
    const ingredient4 = document.createElement("li");
    ingredient4.textContent = data.hits[0].recipe.ingredientLines[3];
    ulEl.appendChild(ingredient4);
    
    const ingredient5 = document.createElement("li");
    ingredient5.textContent = data.hits[0].recipe.ingredientLines[4];
    ulEl.appendChild(ingredient5);
   
    const ingredient6 = document.createElement("li");
    ingredient6.textContent = data.hits[0].recipe.ingredientLines[5];
    ulEl.appendChild(ingredient6);
   
    const ingredient7 = document.createElement("li");
    ingredient7.textContent = data.hits[0].recipe.ingredientLines[6];
    ulEl.appendChild(ingredient7);
    
    const ingredient8 = document.createElement("li");
    ingredient8.textContent = data.hits[0].recipe.ingredientLines[7];
    ulEl.appendChild(ingredient8);
    
    const ingredient9 = document.createElement("li");
    ingredient9.textContent = data.hits[0].recipe.ingredientLines[8];
    ulEl.appendChild(ingredient9);
    
    const ingredient10 = document.createElement("li");
    ingredient10.textContent = data.hits[0].recipe.ingredientLines[9];
    ulEl.appendChild(ingredient10);

    const ingredient11 = document.createElement("li");
    ingredient11.textContent = data.hits[0].recipe.ingredientLines[10];
    ulEl.appendChild(ingredient11);

    const ingredient12 = document.createElement("li");
    ingredient12.textContent = data.hits[0].recipe.ingredientLines[11];
    ulEl.appendChild(ingredient12);

    const ingredient13 = document.createElement("li");
    ingredient13.textContent = data.hits[0].recipe.ingredientLines[12];
    ulEl.appendChild(ingredient13);
    
    const ingredient14 = document.createElement("li");
    ingredient14.textContent = data.hits[0].recipe.ingredientLines[13];
    ulEl.appendChild(ingredient14);

    const ingredient15 = document.createElement("li");
    ingredient15.textContent = data.hits[0].recipe.ingredientLines[14];
    ulEl.appendChild(ingredient15);

    const ingredient16 = document.createElement("li");
    ingredient16.textContent = data.hits[0].recipe.ingredientLines[15];
    ulEl.appendChild(ingredient16);
    
    const ingredient17 = document.createElement("li");
    ingredient17.textContent =data.hits[0].recipe.ingredientLines[16];
    ulEl.appendChild(ingredient17);

    const ingredient18 = document.createElement("li");
    ingredient18.textContent = data.hits[0].recipe.ingredientLines[17];
    ulEl.appendChild(ingredient18);

    const ingredient19 = document.createElement("li");
    ingredient19.textContent = data.hits[0].recipe.ingredientLines[18];
    ulEl.appendChild(ingredient19);

    const ingredient20 = document.createElement("li");
    ingredient20.textContent = data.hits[0].recipe.ingredientLines[19];
    ulEl.appendChild(ingredient20);

    const instrustions = document.createElement("a");
    instrustions.textContent = data.hits[0].recipe.url;
    box1.appendChild(instrustions);








    console.log(data);
    const recipeDiv = document.getElementById("box");
        recipeDiv.appendChild(box1);
        
    })


  







            // Fetch api for each filter option 
// Curl for vegan/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=id&app_key=apiKey&health=vegan"
// request url for vegan/ https://api.edamam.com/api/recipes/v2?type=public&app_id=id&app_key=apiKey&health=vegan

// Curl for veg/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=id&app_key=apiKey&health=vegetarian"
// request url for veg/ https://api.edamam.com/api/recipes/v2?type=public&app_id=id&app_key=apiKey&health=vegetarian

// Curl for kosher/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=kosher"
// request url for kosher/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=kosher

// Curl for low carb/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&diet=low-carb"
// request url for low carb/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&diet=low-carb

// Curl for dairy free/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=dairy-free"
// request url for dairy free/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=dairy-free

// Curl for gluten free/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=gluten-free"
// request url for gluten free/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=gluten-free

// Curl for breakfast/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Breakfast"
// request url for breakfast/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Breakfast

// Curl request for lunch/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Lunch"
// request url for lunch/ https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Lunch

// Curl request for dinner/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Dinner"
// request url for dinner/  https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&mealType=Dinner

              // Fetch api for multiple choices 
// Curl request for vegan and break/ curl -X GET --header "Accept: application/json" "https://api.edamam.com/api/recipes/v2?type=public&app_id=eceea0f0&app_key=356844f53ca5f3e2604e67318c228565&health=vegan&mealType=Breakfast"
// request url for vegan and break/ 
// console.log(container)

 

