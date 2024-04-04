const datacontainer = document.querySelector("#datacontainer");

const userQuery = document.getElementById("userQuery");

const catArt = document.getElementById("fetchPaintings");
const catMusic = document.getElementById("fetchMusic");
const catPhoto = document.getElementById("fetchPhotography");
const catMaps = document.getElementById("fetchMaps");
const catManuscripts = document.getElementById("fetchManuscripts");
const catWW1 = document.getElementById("fetchWw1");

let output;
let query = "las meninas";
const key = "ikettorrine";

// fetch the dataset through the URL
fetch(
  "https://api.europeana.eu/api/v2/search.json?reusability=open&qf=TYPE:IMAGE&query=" +
    query +
    "&wskey=" +
    key +
    "&rows=25&start=1"
).then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      // declare path to data items
      let path = data.items;
      // output a numbered list tag
      output = "<article>";
      // for each data item run the list function
      path.forEach(imgFunction);
      output += "</article>";
      // add the output to the HTML datacontainer div
      datacontainer.innerHTML = output;
    });
  }
});

// function for creating img items
function imgFunction(item) {
  // add an img tag to each item
  output += `
  <a href=${item.guid}>
  <img src=${item.edmPreview}>
  </a>
  <h4>${item.title[0]}</h4>
`;
}

//  Eventos desde los botones

catArt.addEventListener("click", function () {
  fetchEuropeanaCategories("art painting");
});

catMusic.addEventListener("click", function () {
  fetchEuropeanaCategories("music");
});

catPhoto.addEventListener("click", function () {
  fetchEuropeanaCategories("artistic photography");
});

catManuscripts.addEventListener("click", function () {
  fetchEuropeanaCategories("ancient manuscript");
});

catWW1.addEventListener("click", function () {
  fetchEuropeanaCategories("ww1");
});
