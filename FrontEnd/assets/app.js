import {SessionManager} from "./core/SessionManager.js"

/***** Vérifier si l'utilisateur est connecté, return if true *****/

document.querySelector('#authLink').addEventListener('click', (e) => {
    if (SessionManager().isAuthenticated()) {
        e.preventDefault()
        e.target.innerText = `login`
        SessionManager().unvalidate()
        SessionManager().refreshHUD()
    } else {
        if (e.target.getAttribute('href') === null) e.target.setAttribute('href', 'login.html')
    }
})