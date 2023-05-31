// src/pages/Signup/Signup.js

import { signup } from '../services/auth';

// Logika signup
function handleSignup() {
    // Ambil data input dari form signup
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Panggil fungsi signup dari auth.js
    signup(username, password, email)
        .then((response) => {
            // Penanganan response setelah berhasil signup
            console.log('Berhasil signup:', response);
            // ...
        })
        .catch((error) => {
            // Penanganan error saat signup
            console.error('Gagal signup:', error);
            // ...
        });
}

// Export komponen signup
export default function Signup() {
    // ...
}
