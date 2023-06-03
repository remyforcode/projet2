import { createAdminHUD, deleteAdminHUD } from "./AdminMenu.js"

export const SessionManager = () => {
    return {
        refreshHUD: (data = null) => SessionManager().isAuthenticated() ? createAdminHUD(data = null) : deleteAdminHUD(),
        
        /***** Supprimer le jeton *****/

        unvalidate: () => sessionStorage.removeItem('token'),

        /***** Définir le token dans le session storage *****/

        validate: (token, expire = null) => sessionStorage.setItem('token', token),

        /***** Récupérer le token stocké *****/

        getToken: () => {
            return sessionStorage.getItem('token')
        },
        
        /***** Vérifier si le jeton de l'utilisateur est correctement stocké dans le session storage *****/
        isAuthenticated: () => {
            let storedToken = SessionManager().getToken()
            if (storedToken === null) return false
            return true;
        }
    }
}