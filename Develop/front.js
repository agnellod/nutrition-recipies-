// var random = document.getElementById("display-recipe");
// const apiKey = '63fb7278f9msh105fbe7a01b5ab6p11a57bjsnfdf002c44f30'
// var randomRecipe = function(){
//     var frontApi = 'https://tasty.p.rapidapi.com/recipes/auto-complete?q=${display}&appid=${apiKey}prefix=chicken%20soup'
//         fetch(frontApi)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function(data){
//             console.log(data)
//             random.append(response);
//         })
    
// }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63fb7278f9msh105fbe7a01b5ab6p11a57bjsnfdf002c44f30',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/tags/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));