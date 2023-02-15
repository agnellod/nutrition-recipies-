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
   

    for(let i = 0; i < 10; i++) {
        const boxes = document.createElement("div")
        const titleEl = document.createElement("h1")
        titleEl.textContent = data.hits[i].recipe.label;
        titleEl.classList.add("has-text-black", "is-size-2", "has-text-centered", "p-2")
        boxes.appendChild(titleEl);    
        
        const imgEl = document.createElement("img");
        imgEl.setAttribute('src', data.hits[i].recipe.image);
        boxes.appendChild(imgEl);
    
        const ulEl = document.createElement("ul");
        boxes.appendChild(ulEl)
        for(let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
            const ingredientTest = document.createElement("li");
            ingredientTest.textContent = data.hits[i].recipe.ingredientLines[j];
            ulEl.appendChild(ingredientTest);
        }
        const instrustions = document.createElement("a");
        instrustions.textContent = data.hits[i].recipe.url;
        instrustions.href = data.hits[i].recipe.url;
        boxes.appendChild(instrustions);
        box1.append(boxes)
    }

    








    console.log(data);
    const recipeDiv = document.getElementById("box");
        recipeDiv.appendChild(box1);
        
    })


  var random = document.getElementById("display-recipes");
var randomRecipe = function(){

    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        document.body.onload = addElement;
        addElement(data);
            console.log(data)
            
        })
      }
    }


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
  localStorage.setItem ("searchForm", "submit");
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


 

