// Récupération des éléments du DOM 
const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById('passwordButton');
const eyeIcon = document.getElementById('icon');
const eyeIconSlash = document.getElementById('icon-slash');

// Initialisation de l'évenement au click du bouton
passwordButton.addEventListener('click', () => {

    //! ternaire pour definir le type d'input a changer (liberté prise pour plus de simplicité)
    const type = passwordInput.getAttribute('type') === "password" ? "text" : "password"
    
    // changement du type
    passwordInput.setAttribute('type', type)

    // condition pour l'affichage des icones
    if (passwordInput.getAttribute('type') === "password") {
        eyeIconSlash.classList.add('hidden')        
        eyeIcon.classList.remove('hidden')
    } else {
        eyeIconSlash.classList.remove('hidden')        
        eyeIcon.classList.add('hidden')
    }
    
    // lancement du timer si l'input est de type "text"
    if (passwordInput.getAttribute('type') === 'text') {
        setTimeout(() => {
            passwordInput.setAttribute('type', "password")
            eyeIconSlash.classList.add('hidden')        
            eyeIcon.classList.remove('hidden')
        }, 5000);
    }

});