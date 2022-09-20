const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById('passwordButton');
const eyeIcon = document.getElementById('icon');
const eyeIconSlash = document.getElementById('icon-slash');

passwordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === "password" ? "text" : "password"
    passwordInput.setAttribute('type', type)

    if (passwordInput.getAttribute('type') === "password") {
        eyeIconSlash.classList.add('hidden')        
        eyeIcon.classList.remove('hidden')
    } else {
        eyeIconSlash.classList.remove('hidden')        
        eyeIcon.classList.add('hidden')
    }
    
    if (passwordInput.getAttribute('type') === 'text') {
        setTimeout(() => {
            passwordInput.setAttribute('type', "password")
            eyeIconSlash.classList.add('hidden')        
            eyeIcon.classList.remove('hidden')
        }, 5000);
    }
    
});