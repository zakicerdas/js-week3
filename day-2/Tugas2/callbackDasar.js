    //5. Callback Function Dasar (5 Kasus)
//Kalkulasi dengan Callback
//Buat fungsi kalkulasi(angka1, angka2, callback). Callback bisa tambah, kali, dsb.
//Sapa dengan Callback
//Buat fungsi greet(nama, callback). Callback tentukan format sapaan.
//Filter Angka dengan Callback
//Buat fungsi filterAngka(arr, callback) → callback tentukan logika (ganjil/genap).
//Sorting dengan Callback
//Buat fungsi sortData(arr, callback) → callback tentukan urutan naik/turun.
//Validasi Input
//Fungsi validasi(data, callback). Callback tentukan apakah data valid atau tidak.

//1.
function kalkulasi(angka1, angka2, callback) {
    return callback(angka1, angka2);
}
function tambah(a, b) {
    return a + b;
}
function kali(a, b) {
    return a * b;
}

console.log(kalkulasi(5, 3, kali));
console.log(kalkulasi(5, 3, tambah));

//2.
function greet(nama, callback) {
    return callback(nama);
}
function sapa1(nama) {
    return `ohayou gozaimasu, ${nama}!`;
}
function sapa2(nama) {
    return `konnichiwa, ${nama}!`;
}
console.log(greet("Budi", sapa1));
console.log(greet("Budi", sapa2));

//3.
function 

