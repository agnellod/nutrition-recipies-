const searchButtonEl = document.querySelector('.is-info');

function switchToSecondPage(event) {
    event.preventDefault();
    
    const searchInputVal = document.querySelector('.input').value;
    const dietaryRestVal = document.querySelector('.dropdown-item').value;

    if (!searchInputVal) {
        console.error('Please enter food to search');
        return;
    }

    document.getElementById('dropdown-item', '.vegan').addEventListener('click', function (check) {
        check.preventDefault();
        let checkedBox = document.querySelector('.checkbox');
        let checkedOutput = checkedBox.append(queryString);
        
        for (let check of checkedBox) {
            const d = history.healthlabels[5];
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${id}&app_key=${apiKey}&health=vegan`)
            
            .then((r)=> r.json())
            
            .then( d => {
                
                let checkedPreference = document.textContent(check + history.healthlabels[0])
                console.log(checkedPreference); // confirm that these query calls link to our api specifically
                checkedOutput.appendChild(checkedPreference)
            }) 
        }
            
        })
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