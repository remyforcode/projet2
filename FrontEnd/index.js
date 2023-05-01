let projets

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
  const gallery = document.querySelector(".gallery")
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
  const text = event.target.value
  console.log(text) 
  fetch('http://localhost:5678/api/works', {
    body: text, 
    method: "POST"
  }) 
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


}
buttons.forEach(button =>{
  button.addEventListener("click", filters)
})


