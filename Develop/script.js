const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

// Api key and id
var apiKey = '356844f53ca5f3e2604e67318c228565';
var id = 'eceea0f0';
var url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${id}&app_key=${apiKey}`;
const options = {method: 'GET'};
  
  // Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
  
    console.log(enabledSettings)
  })
});







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
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const searchUrl = `https://api.edamam.com/search?q=chicken&id=${id}&apiKey=${apisKey}`;
  const response = await fetch(searchUrl);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}




fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
  let enabledSettings = []
 

