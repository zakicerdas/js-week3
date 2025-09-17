// contoh callback function
export function masakMie(callback) {
    console.log("Memasak mie... 🍜");
  setTimeout(() => {
    console.log("Mie sudah matang 🍜");
    callback(); // panggil callback setelah 2 detik
  }, 5000);
}
masakMie(() => {
  console.log("Mie siap disantap! 😋");
});

//✍️ Latihan Mandiri
//Buat objek JavaScript berisi data diri (nama, umur, alamat).
//Ubah ke JSON pakai JSON.stringify().
//Simpan data JSON di localStorage.
//Ambil lagi datanya pakai JSON.parse() dan tampilkan.
//Ambil data dari API publik (contoh: https://jsonplaceholder.typicode.com/users) lalu tampilkan di console.

//1.
let dataDiri = {
    nama: "zaki",
    umur: 20,
    hobi: ["ngoding","nonton anime","gooning"],
    alamat: "indonesia"
};

//2.
let dataJSON = JSON.stringify(dataDiri);
console.log(dataJSON);

//3.
localStorage.setItem("data",dataJSON);

//4.
let ambilData = localStorage.getItem("data");
let dataString = JSON.parse(ambilData);
console.log(dataString);

//5.
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data));