document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Verifica le credenziali
    if (username === 'admin' && password === 'its') {
        // Login riuscito
        window.location.href = "homepage.html"; // Reindirizza alla pagina principale
    } else {
        // Login fallito
        errorMessage.textContent = 'Username o password errati.';
    }
});
