const searchButtonEl = document.querySelector('.is-info');

function switchToSecondPage(event) {
    event.preventDefault();
    
    const searchInputVal = document.querySelector('.input').value;
    const dietaryRestVal = document.querySelector('.dropdown-item').value;

    if (!searchInputVal) {
        console.error('Please enter food to search');
        return;
    }
    const queryString = './secondpage.html?q=' + searchInputVal + '&dietaryrestriction=' + dietaryRestVal;

    // location.assign(queryString);
    window.location.replace(queryString)
}

searchButtonEl.addEventListener('click', switchToSecondPage);







var random = document.getElementById("display-recipe");
const apiKey = '1'
var randomRecipe = function(){
    var frontApi = 'http://www.themealdb.com/api/json/v1/1/random.php';
            fetch(frontApi)
        .then(function (response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)
            
        })
    
}
randomRecipe();
;