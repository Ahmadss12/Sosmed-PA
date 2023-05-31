import { signIn } from './services/auth';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const token = await signIn(username, password);
        // Autentikasi berhasil, lanjutkan ke halaman berikutnya
        console.log('Login berhasil');
        // Tambahkan kode untuk berpindah ke halaman berikutnya atau menampilkan pesan sukses
    } catch (error) {
        // Autentikasi gagal, tangani error
        console.error('Login gagal', error);
        // Tambahkan kode untuk menampilkan pesan error kepada pengguna
    }
});
