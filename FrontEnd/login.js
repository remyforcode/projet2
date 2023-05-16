document.querySelector("#connexion-form")
.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
  
    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "user not found") {
          // Utilisateur non trouvé
          document.querySelector("#message").textContent = "Utilisateur non trouvé";
        } else if (data.error) {
            // Erreur d'authentification
            document.querySelector("#message").textContent = "Erreur d'authentification: " + data.error.message;
        } else {
            
            // Stocker le token dans le local storage
            localStorage.setItem("token", data.token);

            // Rediriger l'utilisateur vers l'index.html
            window.location.href = "admin.html";

        }
      })
    });