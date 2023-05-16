function logout() {
    // Supprimer le token du local storage
    localStorage.removeItem("token");
  
    // Rediriger l'utilisateur vers la page de login
    window.location.href = "index.html";
  }

  let logoutBouton = document.querySelector("#logout-link")
  logoutBouton.addEventListener("click", logout)