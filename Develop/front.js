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