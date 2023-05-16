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

function logout() {
    // Supprimer le token du local storage
    localStorage.removeItem("token");
  
    // Rediriger l'utilisateur vers la page de login
    window.location.href = "index.html";
  }

  let logoutBouton = document.querySelector("#logout-link")
  logoutBouton.addEventListener("click", logout)

var openModalBtn = document.querySelector(".modifywrapper");
var closeModalBtn = document.querySelector(".close");
var myModal = document.querySelector("#myModal");

openModalBtn.addEventListener("click", function() {
  myModal.showModal();
  displayModal(projets)
});

closeModalBtn.addEventListener("click", function() {
  myModal.close();
});

  // Obtenir la référence de la modale et du bouton de fermeture
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");

// Fonction de gestionnaire d'événement pour la fermeture de la modale
function closeModal() {
  modal.close();
}

// Ajouter un événement de clic au bouton de fermeture
closeButton.addEventListener("click", closeModal);


let gallery = document.querySelector(".gallerymodal")



function displayWorks(projets) {
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

 function displayModal(projets) {
  const gallery = document.querySelector(".gallerymodal")
  gallery.innerHTML = '';
    for (let projet of projets) {

        
        const img = document.createElement("img");
        
        img.classList.add("imgModal");
        img.src = projet.imageUrl;
        img.alt = projet.alt;
    
    
        gallery.appendChild(img);
    
    }
}

