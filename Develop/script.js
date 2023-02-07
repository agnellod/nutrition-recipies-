var apiKey = '356844f53ca5f3e2604e67318c228565';
var id = 'eceea0f0';

var url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${id}&app_key=${apiKey}`;
const options = {method: 'GET'};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
