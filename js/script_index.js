const key = "ikettorrine";

const datacontainer = document.getElementById("datacontainer");
const searchForm = document.getElementById("searchForm");
const catArt = document.getElementById("fetchPaintings");
const catMusic = document.getElementById("fetchMusic");
const catPhoto = document.getElementById("fetchPhotography");
const catMaps = document.getElementById("fetchMaps");
const catManuscripts = document.getElementById("fetchManuscripts");
const catWW1 = document.getElementById("fetchWw1");
const categoryButtons = document.querySelectorAll(".category-button");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("searchInput").value;
  fetchAndDisplayData(query);
});

// Función para realizar la solicitud a la API de Europeana y mostrar los datos
async function fetchAndDisplayData(query) {
  try {
    const response = await fetch(
      `https://api.europeana.eu/record/v2/search.json?query=${query}&wskey=` +
        key 

    );
    const data = await response.json();
    const resultPage = window.open("pages/result.html", "_blank");
    resultPage.addEventListener("DOMContentLoaded", () => {
      const resultDatacontainer =
        resultPage.document.getElementById("datacontainer");
      resultDatacontainer.innerHTML = data.items
        .map(
          (item) => `
      <div class="cards_results">
    <a href=${item.guid}>
    <img class="card_img" src=${item.edmPreview}>
    </a>
    <h4>${item.title[0]}</h4>
    </div>
  `
        )
        .join("");
    });
  } catch (error) {
    console.error(error);
  }
}

catArt.addEventListener("click", () => fetchAndDisplayData("art painting"));
catMusic.addEventListener("click", () =>
  fetchAndDisplayData("music instruments")
);
catPhoto.addEventListener("click", () =>
  fetchAndDisplayData("artistic photography")
);
catMaps.addEventListener("click", () => fetchAndDisplayData("geographic map"));
catManuscripts.addEventListener("click", () =>
  fetchAndDisplayData("ancient manuscript")
);
catWW1.addEventListener("click", () => fetchAndDisplayData("ww1"));
