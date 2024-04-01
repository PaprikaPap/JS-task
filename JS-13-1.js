const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loader = document.getElementById('loader');

loginButton.addEventListener('click', () => {
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        console.log('Email:', document.getElementById('email').value);
        console.log('Password:', document.getElementById('password').value);
        window.location.href = 'https://mail.google.com';
    }, 2000);
});