📌 Soal 1 – Ambil Data Berantai

Buatlah tiga function getUser(), getPost(), dan getComment() yang masing-masing mengembalikan Promise dengan setTimeout.

getUser() → setelah 1 detik kembalikan "User ditemukan".

getPost() → setelah 1 detik kembalikan "Post ditemukan".

getComment() → setelah 1 detik kembalikan "Komentar ditemukan".

Gunakan Promise chaining agar outputnya muncul berurutan:

User ditemukan
Post ditemukan
Komentar ditemukan

📌 Soal 2 – Kalkulasi Matematika

Buatlah dua function yang mengembalikan Promise:

tambah(x, y) → hasil penjumlahan

kali(x, y) → hasil perkalian

Gunakan chaining untuk menghitung langkah berikut:

Tambah 5 + 7

Kali hasilnya dengan 3

Tampilkan hasil akhir di console

📌 Soal 3 – Validasi Input

Buatlah dua function yang mengembalikan Promise:

cekNama(nama) → resolve "Nama valid" jika tidak kosong, reject jika kosong.

cekEmail(email) → resolve "Email valid" jika ada tanda "@", reject jika tidak ada.

Gunakan Promise chaining untuk memvalidasi:

Nama = "Danz"

Email = "danz@example.com"

Tampilkan hasil validasi di console. Jika ada error, tangani dengan .catch().

📌 Soal 4 – Simulasi Belanja Online

Buatlah tiga function berbasis Promise dengan setTimeout:

login() → kembalikan "Login berhasil" setelah 1 detik.

pilihBarang() → kembalikan "Barang dipilih" setelah 1 detik.

bayar() → kembalikan "Pembayaran sukses" setelah 1 detik.

Gunakan Promise chaining agar console menampilkan urutan proses belanja.

📌 Soal 5 – Progress Loading

Buatlah function progress(step) yang mengembalikan Promise dengan setTimeout, hasilnya berupa string:

"Progress: <step>%"


Gunakan chaining untuk menampilkan:

Progress: 25%
Progress: 50%
Progress: 75%
Progress: 100%
Selesai!


👉 Semua soal di atas wajib menggunakan Promise dan Chaining (.then()), bukan async/await.