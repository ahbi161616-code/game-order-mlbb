document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const game = document.getElementById('game').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const email = document.getElementById('email').value;

    // Validasi sederhana
    if (!game || !item || !quantity || !email) {
        alert('Harap isi semua field!');
        return;
    }

    // Simulasi pengiriman (bisa diganti dengan API)
    alert(`Pesanan berhasil!\nGame: ${game}\nItem: ${item}\nJumlah: ${quantity}\nEmail: ${email}\n\nKami akan menghubungi Anda segera.`);

    // Reset form
    document.getElementById('orderForm').reset();
});
