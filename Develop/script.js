// making a class for the search function to find recipes potential starter code
class Search {
    constructor(form) {
      this.form = form
      this.results = document.querySelector("#search-results")
    }
    initialize() {
      console.log(this.form)
    }
  }
  // Listener for the DOM Content load (this makes the HTML load first before this avtivates)
  document.addEventListener("DOMContentLoaded", () => {
    // Query for the `search-form`
    const form = document.querySelector("#search-form")
    // Create a new instance of our Search class and pass the instance of the form through
    const search = new Search(form)
    // call the initialize function
    search.initialize()
  })
  // if we do dropdown it could look something like this in js 
     function myFunction() {
    document.getElementById("theDropdown").classList.toggle("reveal"); 
  }
  // and then to recognize that the user is closing it by clicking somewhere else on screen 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var opDropdown = dropdowns[i];
        if (opDropdown.classList.contains('reveal')) {
          opDropdown.classList.remove('reveal');
        }
      }
    }
  } 
  //  Maybe a good api to use

// I am not sure if I did this framework correct 
// axios.get('https://edamam-recipe-search.p.rapidapi.com/search')
  // .then((respone) => {
    // code for response
 // })
 // .catch((error) => {
    // code for error
//  });

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://edamam-recipe-search.p.rapidapi.com/search',
//   params: {q: 'chicken'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
