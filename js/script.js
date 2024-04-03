/* let datacontainer = document.getElementById("datacontainer");

let query = "botanic";
let key = "ikettorrine";

fetch(
  "https://api.europeana.eu/api/v2/search.json?reusability=open&qf=TYPE:IMAGE&query=" +
    query +
    "&wskey=" +
    key
).then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      // Almacenar los datos en localStorage
      localStorage.setItem("searchResult", JSON.stringify(data.items));

      // Redirigir a la página de resultados
      window.location.href = "result.html";
    });
  }
});



// Obtener los datos almacenados en localStorage
var searchData = localStorage.getItem("searchResult");
if (searchData) {
  // Convertir los datos a formato JSON
  var searchResult = JSON.parse(searchData);

  // Mostrar los resultados en la página
  searchResult.forEach(function (item) {
    datacontainer.innerHTML +=
      '<img height="150px" src="' + item.edmPreview[0] + '"/>';
  });
} else {
  // Mostrar un mensaje si no se encuentran resultados
  datacontainer.innerHTML = "No se encontraron resultados.";
}
 */

let datacontainer = document.querySelector("#datacontainer");

// declare the variables
var output = null;
var query = "botanic";
var key = "ikettorrine";

// fetch the dataset through the URL
fetch(
  "https://api.europeana.eu/api/v2/search.json?reusability=open&qf=TYPE:IMAGE&query=" +
    query +
    "&wskey=" +
    key
).then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      // declare path to data items
      let newPage = window.open(".pages/result.html");
      var path = data.items;
      // output a numbered list tag
      output = "<ol>";
      // for each data item run the list function
      path.forEach(imgFunction);
      output += "</ol>";
      // add the output to the HTML datacontainer div
      datacontainer.innerHTML = output;
    });
  }
});

// function for creating img items
function imgFunction(item) {
  // add an img tag to each item
  output += '<img height="150px" src="';
  output += item.edmPreview[0];
  output += '"/>';
}
