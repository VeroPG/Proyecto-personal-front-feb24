document.addEventListener("DOMContentLoaded", function () {
  const dataContainer = document.getElementById("dataContainer");

  // Obtener los datos almacenados en localStorage
  const europeanaData = JSON.parse(localStorage.getItem("europeanaData"));

  if (europeanaData && europeanaData.items) {
    // Pintar los datos en el contenedor
    dataContainer.innerHTML = europeanaData.items
      .map(
        (item) => `
      <div class="cards_results">
        <img class="card_img" src="${item.edmPreview}">
        <h4>${item.title[0]}</h4>
      </div>
      `
      )
      .join(""); // Es importante unir el array de strings en un solo string antes de asignarlo a innerHTML
  }

  // Obtener todas las imágenes pintadas en el contenedor
  const images = document.getElementsByClassName("cards_results");

  // Agregar un evento de clic a cada imagen
  for (let image of images) {
    image.addEventListener("click", function () {
      // Mostrar el alerta de SweetAlert cuando se hace clic en una imagen
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    });
  }
});
