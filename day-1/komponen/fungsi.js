//🍼 5 Studi Kasus Asynchronous Alarm

    //alarm
//Pakai setTimeout buat cetak "Bangun!" setelah 5 detik.

export function alarm(){
console.log("hitung mundur!")
setTimeout(() => {
  console.log("bangun setelah 5 detik");
}, 5000);
console.log("bangun!");
}

    //Jam Dinding
//Pakai setInterval untuk cetak jam sekarang setiap detik.

export function jamDinding(){
    setInterval(() => {
        console.log(new Date().toLocaleString())
    },5000 );
}

    //Loading Screen
//Cetak "Loading..." setiap detik, tapi berhenti setelah 5 detik.
let detik = 0;
export function loading(){
   let hitung = setInterval(() => {
        detik++
  console.log("Loading...");
        if (detik === 5) clearInterval(hitung);
},1000 );

}

//Cek Nomor (Promise)
//Bikin cekNomor(n) → kalau genap resolve("Genap"), kalau ganjil reject("Ganjil").

export function cekNomor(a){
    return new Promise((resolve, reject) => {
        if( a % 2 === 0) resolve("genap");
          else  reject("ganjil");
    });

}
 
//Data Palsu (async/await)
//Fungsi ambilUser() yang pura-puranya ambil data setelah 3 detik.

 