console.error("📘 Studi Kasus – Modularisasi & JSON");

//1. Modul Biodata Sederhana
//Buat sebuah file biodata.js yang mengekspor objek JSON berisi data diri (nama, umur, alamat).
//Lalu import di index.js dan tampilkan biodata ke console.

import dataDiri from "./biodata.js";
let bio = JSON.parse(dataDiri);
console.log(bio);


//2. Modul Operasi Matematika
//Buat file math.js yang berisi fungsi tambah, kurang, kali, bagi.
//Export semua fungsi.
//Import di index.js, lalu hitung:

import { tambah, kurang, kali, bagi } from "./math.js";
console.log(tambah(20,5));
//20 + 5
console.log(kurang(30,10));
//30 - 10
console.log(kali(6,7));
//6 × 7
console.log(bagi(50,2));
//50 ÷ 2


//3. Daftar Produk JSON
//Buat file produk.json yang berisi array objek produk (id, nama, harga).
//Import JSON di index.js lalu tampilkan semua produk dengan format:
//Produk: [nama], Harga: [harga]

import data from "./produk.json" with { type: "json" };
data.forEach(p => {
    console.log(`Produk: ${p.nama}, Harga: ${p.harga}`);
});


//4. Modul Helper Format Rupiah
//Buat file helper.js dengan fungsi formatRupiah(number) yang mengubah angka menjadi format rupiah.
//Gunakan untuk menampilkan harga produk dari produk.json.

import { formatRupiah } from "./helper.js";
data.forEach(p => {
    console.log(`Produk: ${p.nama}, Harga: ${formatRupiah(p.harga)}`);
});

//5. Simpan dan Ambil Data User
//Buat user.json berisi daftar user (id, username, email).
//Buat modul userService.js dengan fungsi:

import { getAllUser, getUserById } from "./userService.js";
console.log(getAllUser()); 
console.log(getUserById(2));

//6. Modul CRUD Task
//Buat taskService.js yang menyimpan daftar task dalam array JSON.
//Fungsi yang harus ada:

import { addTask, getAllTask, deleteTask } from "./taskService.js";
console.log(addTask("Belajar JavaScript"));
console.log(addTask("Mengerjakan tugas"));
console.log(addTask("Bermain game"));
console.log(getAllTask());
console.log(deleteTask(2));


//Gunakan di index.js untuk menambah 3 task, tampilkan semua, lalu hapus 1 task.

//7. Modul Auth Sederhana
//Buat auth.js dengan fungsi:

import { login, register } from "./auth.js";
console.log(login("wowo", "1234"));
console.log(register("zaki", "4321"));

//8. Import JSON API (dummy)
//Gunakan fetch untuk ambil data JSON dari:
//https://jsonplaceholder.typicode.com/posts
//Buat modul postService.js dengan fungsi getPosts() dan tampilkan 5 post pertama di index.js.

import getPosts from "./postService.js";
getPosts().then(posts => {
    posts.slice(0,5).forEach(p => {
        console.log(`Title: ${p.title}`);
    });
});

//9. Modul Statistik Nilai
//Buat file nilai.json berisi array nilai angka.
//Buat modul statistik.js dengan fungsi:

import { rataRata, nilaiTertinggi, nilaiTerendah} from "./statistik.js";
console.log("rata rata:",rataRata());
console.log("nilai tertinggi:",nilaiTertinggi());
console.log("nilai terendah",nilaiTerendah());

//Import dan tampilkan hasilnya.

//10. Mini Project – Aplikasi Perpustakaan
//Buat books.json berisi daftar buku (id, judul, penulis, tahun).
//Buat libraryService.js dengan fungsi:

import { getAllBooks, addBook, findBookByTitle } from "./library.js";
console.log(getAllBooks());
console.log(addBook({judul: "Jujutsu Kaisen", penulis: "Gege Akutami", tahun: 2013}));
console.log(findBookByTitle("naruto"));
//Buat index.js untuk menambah buku baru, menampilkan semua buku, dan mencari buku tertentu.


