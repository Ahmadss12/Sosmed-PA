window.addEventListener('DOMContentLoaded', adjustLayout);
window.addEventListener('resize', adjustLayout);

function adjustLayout() {
    var bgLogin = document.querySelector('.bglogin');
    var loginForm = bgLogin.querySelector('form');
    var loginButton = loginForm.querySelector('button');

    if (window.innerWidth < 800) {
        bgLogin.style.width = '90%';
        bgLogin.style.marginLeft = '5%';
        loginForm.style.marginLeft = '0';
        loginForm.style.width = '100%';
        loginButton.style.width = '100%';
        loginButton.style.marginLeft = '0';
    } else {
        bgLogin.style.width = '650px';
        bgLogin.style.marginLeft = '368px';
        loginForm.style.marginLeft = '130px';
        loginForm.style.width = '400px';
        loginButton.style.width = '400px';
        loginButton.style.marginLeft = '0';
    }
}

// Initial layout adjustment on page load
adjustLayout();