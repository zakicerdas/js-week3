 //setTimeout (5 Kasus)
//Pesan Tertunda
//Tampilkan "Halo dunia!" setelah 3 detik.
//Hitung Mundur 5 Detik
//Gunakan setTimeout berantai untuk menampilkan 5…4…3…2…1.
//Loading Simulation
//Tampilkan "Loading..." → 2 detik kemudian "Selesai!".
//Pesan Bertahap
//Cetak "Start" → (2 detik) "Proses…" → (2 detik) "Done".
//Simulasi Alarm
//Setelah 5 detik tampilkan "Waktunya belajar!".


//1.
function pesanTertunda(){
    setTimeout(() => {
        console.log("Halo Dunia!");
    }, 3000);
}

pesanTertunda();

//2.
function hitungMundur(angka) {
  if (angka < 0) {
    console.log("death!");
    return;
  }

  console.log(angka);

  setTimeout(() => {
    hitungMundur(angka - 1);
  }, 1000);
}

hitungMundur(5);

//3.
function loadingSimulation() {
    console.log("Loading...");
    setTimeout(() => {
        console.log("selesai!");
    }, 3000);
}

//4.
function pesanBertahap() {
    console.log("Start");
    setTimeout(() => {
        console.log("...Proses")
        setTimeout(() => {
            console.log("Done");
        }, 2000);
    }, 2000);
}

pesanBertahap();

//5.
function simulasiAlarm() {
    setTimeout(() => {
        console.log("Waktunya Belajar!");
    }, 5000);
}

simulasiAlarm();