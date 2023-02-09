var apiKey = '356844f53ca5f3e2604e67318c228565';
var id = 'eceea0f0';

var url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${id}&app_key=${apiKey}`;
const options = {method: 'GET'};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

  var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
  let enabledSettings = []
 
  
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