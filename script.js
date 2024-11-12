// Fungsi untuk menampilkan pesan spesial saat tombol pertama diklik
document.getElementById("changeMessageBtn").addEventListener("click", function() {
    document.getElementById("specialMessage").classList.toggle("hidden");
});

// Fungsi untuk menavigasi ke halaman kedua ketika tombol diklik
document.getElementById("goToSecondPageBtn").addEventListener("click", function() {
    window.location.href = "index2.html"; // Mengarah ke index2.html
});

// Fungsi untuk mengaktifkan audio setelah halaman dimuat
window.onload = function() {
    var audio = document.getElementById("myAudio");
    audio.muted = false;  // Mengaktifkan suara setelah halaman dimuat
};
