let projets
let projetsFiltered = []

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    projets = data
    // Do something with the array of works
    displayWorks(projets)
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });


function displayWorks(projets) {
  console.log(projets)
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = '';
    for (let projet of projets) {

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        
        img.src = projet.imageUrl;
        img.alt = projet.alt;
    
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    
    }
}


const buttons = document.querySelectorAll(".filtersButton")

const filters = (event) => {
  
  if (event.target.value === "Tous") {
    displayWorks(projets)
  } else {
    projetsFiltered = projets.filter(projet => projet.category.name === event.target.value)
    displayWorks(projetsFiltered)
    
  }

 }

buttons.forEach(button =>{
  button.addEventListener("click", filters)
})


// Récupérer le token de l'URL
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");



