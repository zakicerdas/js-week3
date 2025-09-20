    //4. setInterval (5 Kasus)
//Jam Digital
//Tampilkan waktu sekarang setiap 1 detik.
//Hitung Mundur
//Hitung mundur dari 10 sampai 0, lalu berhenti (clearInterval).
//Notifikasi Berkala
//Tampilkan pesan "Minum air dulu!" tiap 3 detik.
//Simulasi Loading
//Setiap 1 detik tambahkan tanda titik ke "Loading", berhenti setelah 5 kali.
//Counter Naik
//Mulai dari 0, naik terus tiap 2 detik sampai angka 10, lalu berhenti.

//1.
function jamDigital() {
  const sekarang = new Date();
  console.log(sekarang.toLocaleTimeString()); 
}
//setInterval(jamDigital, 1000);

//2.
function hitungMundur(angka) {
    let hitung = setInterval(() => {
        if (angka < 0) {
            clearInterval(hitung);
            console.log("Selesai!");
            return;
        }
        console.log(angka);
        angka--;
    }, 1000);
}

hitungMundur(10);

//3.
function notifikasiBerkala(){
    setInterval(() => {
        console.log("Minum air dulu!");
    }, 3000);
}

notifikasiBerkala();

//4.
let count = 0;
function Loading() {
    let wait = setInterval(() => {
        console.log("loading"+".".repeat(count))
        count++;
        if(count > 5) clearInterval(wait);
    }, 1000);

}
Loading();

//5.
let angka = 0;
function counterNaik() {
     let up = setInterval(() => {
        console.log(angka);
        angka++;
        if(angka > 10) clearInterval(up);
    }, 2000);
}
counterNaik();
