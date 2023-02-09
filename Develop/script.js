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
 

// random recipe api
  /* var url = "https://www.themealdb.com/api/json/v1/1/random.php";

$.getJSON(url, function (data) {
    console.log(data);
    var output = data.meals;

    for (var i = 0; i < output.length; i++) {
        display.innerHTML +=

            `<img src="${output[i].strMealThumb}" alt="${output[i].strMeal}"> <br>
        
        
        ${output[i].strMeal} <br>
        Category:  ${output[i].strCategory} <br>
        Source: <a href="${output[i].strSource}">${output[i].strSource}</a>`;
    }

});