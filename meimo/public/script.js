// Menunggu semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Pilih SEMUA elemen yang ingin dianimasikan
    const targetElements = document.querySelectorAll('.fade-in-section');

    if (targetElements.length > 0) {

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Jika elemennya masuk ke layar
                if (entry.isIntersecting) {
                    // Tambahkan kelas .is-visible
                    entry.target.classList.add('is-visible');
                    // Hentikan pengamatan elemen ini
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Picu animasi saat 10% elemen terlihat
        });

        // Amati SETIAP elemen yang kita pilih
        targetElements.forEach(target => {
            observer.observe(target);
        });

    } else {
        console.log("Tidak ada elemen .fade-in-section untuk dianimasikan.");
    }

    //
    // KODE UNTUK MODAL LAMA SUDAH DIHAPUS DARI SINI
    // Bootstrap menangani buka/tutup modal secara otomatis
    //
});