// JavaScript bisa digunakan untuk menambahkan interaktivitas di masa depan
// Misalnya, menampilkan alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di profil mahasiswa!");
};
document.getElementById('login-button').addEventListener('click', function() {
    window.location.href = 'profil.html';
});