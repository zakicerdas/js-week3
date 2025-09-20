📘 20 Study Kasus Promise, Async/Await, Try...Catch, dan Fetch
Berikut 20 soal untuk latihan JavaScript modern.

1. Ambil data user dari API publik
Buat fungsi async yang fetch ke https://jsonplaceholder.typicode.com/users/1.

Jika berhasil → tampilkan nama user.
Jika gagal → tampilkan pesan error.
2. Ambil daftar post, cek jumlahnya
Ambil data dari https://jsonplaceholder.typicode.com/posts.

Jika jumlah post > 50, tampilkan "Post banyak sekali".
Jika error, tangkap dengan catch.
3. Promise manual dengan setTimeout
Buat fungsi delay(ms) yang mengembalikan promise dan resolve setelah ms detik. Gunakan async/await untuk menunggu 2 detik lalu cetak "Selesai menunggu".

4. Fetch dengan URL salah
Fetch ke API dengan URL salah. Gunakan try...catch agar tidak membuat aplikasi error. Cetak "Gagal mengambil data API".
5. Cek status API
Fetch ke https://jsonplaceholder.typicode.com/todos/1.

Jika response.ok === true tampilkan datanya.
Jika tidak, throw new Error("API tidak bisa diakses").
6. Promise.all
Buat fetch ke dua API sekaligus:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts Tampilkan hasilnya dalam array. Tangani error dengan catch.
7. Chaining Promise
Buat Promise yang resolve angka 5.

Lanjutkan chaining .then() untuk mengalikan angka × 2, lalu × 3.
Tangani jika ada error (misal salah operasi).
8. Async function dengan throw error
Buat function async checkNumber(num)

Jika num ganjil → throw new Error("Angka ganjil tidak diperbolehkan")
Jika genap → tampilkan "Angka valid". Tangani dengan try...catch.
9. Fetch dengan parameter
Buat async function getPostById(id) yang fetch ke https://jsonplaceholder.typicode.com/posts/{id}.

Jika id > 100 → langsung throw Error("Post tidak ada").
Jika id valid → tampilkan title.
10. Loop fetch dengan async/await
Buat loop untuk ambil data 3 user pertama dari https://jsonplaceholder.typicode.com/users/{id}. Gunakan for + await. Jika salah satu gagal, tangkap error di try...catch.

11. Fetch data todo
Ambil data dari https://jsonplaceholder.typicode.com/todos/5.

Jika completed = true → tampilkan "Selesai".
Jika false → tampilkan "Belum selesai".
12. Promise reject
Buat Promise yang reject dengan pesan "Data gagal diproses". Tangkap dengan .catch().

13. Try/catch nested
Buat fungsi async yang fetch ke API salah.

Gunakan try/catch di dalam try/catch (nested) untuk membedakan error jaringan dan error parsing.
14. Fetch gambar
Ambil data gambar dari https://picsum.photos/200/300. Tampilkan status code. Jika gagal, tampilkan "Gagal ambil gambar".

15. Delay dengan fetch
Buat fungsi delayFetch(url, ms) yang menunggu ms detik sebelum melakukan fetch ke API.

16. Promise.race
Ambil data dari 2 API menggunakan Promise.race.

Tampilkan siapa yang lebih cepat.
Jika semua gagal, tampilkan "Semua request gagal".
17. Fetch JSON invalid
Coba fetch dari URL yang mengembalikan non-JSON lalu parsing dengan res.json(). Tangkap error parsing di catch.

18. Fungsi async recursive
Buat fungsi async yang memanggil dirinya sendiri 3 kali dengan delay 1 detik tiap kali.

19. Error manual di fetch
Fetch ke https://jsonplaceholder.typicode.com/comments/1. Jika email kosong → throw Error("Email tidak ada"). Tangani dengan try...catch.

20. Kombinasi Promise + async
Buat fungsi getData() yang mengembalikan promise.
Gunakan await getData() lalu cetak hasilnya.
Jika gagal, catch harus menampilkan pesan error.

