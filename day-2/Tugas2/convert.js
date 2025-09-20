    //JSON & Object Convert (5 Kasus)
//Convert User Object ke JSON
//Buat object user {nama, umur, email}, lalu konversi ke JSON.

//Convert JSON ke Object
//Dari string JSON {"nama":"Ali","umur":20}, ubah ke object dan akses data.

//Simpan Daftar Produk
//Buat array of object produk, simpan dalam JSON, lalu parsing kembali.

//Filter dari JSON
//Buat JSON daftar siswa, lalu parsing dan tampilkan siswa dengan nilai > 75.

//Gabungkan JSON
//Dua string JSON berbeda (user & alamat), parsing keduanya lalu gabungkan jadi satu object.

let biodata = {nama:"Ali",umur:20};

//1.
let JSONbiodata = JSON.stringify(biodata);
console.log(JSONbiodata);

//2.
let objBiodata = JSON.parse(JSONbiodata);
console.log(objBiodata.nama);

//3.
let produk = [
    {nama: "Sampoo", harga: 2000},
    {nama: "Ginjal", harga: 100000}
];

let Jsonprodug = JSON.stringify(produk);
console.log(Jsonprodug);

let objProdug = JSON.parse(Jsonprodug);
console.log(objProdug[1].nama);

//4.
let siswa =`[
    {"nama":"Budi","nilai":80},
    {"nama":"badi","nilai":20}
    ]`;

let objSiswa = JSON.parse(siswa);
let SiswaPilihan = objSiswa.filter(a =>a.nilai > 75);
console.log(SiswaPilihan);

//5.
let user = `{"nama":"zaki"}`;
let alamat = `{"kota":"jakarta"}`;

let objUser = JSON.parse(user);
let objAlamat = JSON.parse(alamat);

let fusion = {...objUser, ...objAlamat};
console.log(fusion);