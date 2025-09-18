//📌 Soal 1 – Ambil Data Berantai
//Buatlah tiga function getUser(), getPost(), dan getComment() yang masing-masing mengembalikan Promise dengan setTimeout.

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user ditemukan");
        }, 1000);
    });
}

function getPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("postingan ditemukan");
        }, 1000);
    });
}

function getComment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("komentar ditemukan ditemukan");
        }, 1000);
    });
}

getUser().then(res => {
    console.log(res);
    return getPost();
})

.then(res => {
    console.log(res);
    return getComment();
})
.then(res => {console.log(res);});

//📌 Soal 2 – Kalkulasi Matematika
//Buatlah dua function yang mengembalikan Promise:

function tambah(x,y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x + y);
        }, 1000);
    });
}

function kali(x,y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * y);
        }, 1000);
    });
}

tambah(2,3).then(res => {
    console.log(res);
    return kali(res,2);
})
.then(res => {console.log(res);});

//📌 Soal 3 – Validasi Input
//Buatlah dua function yang mengembalikan Promise:

let nama = "Danz"
let email = "danze@xample.com"

function cekNama(nama) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nama !== " ") {
                resolve("Nama valid!");
            } else {
                reject("kamu bukan master!");
            }
        }, 1000);
});
}

function cekEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("@")) {
                resolve("Email valid");
            } else {
                reject("Email tidak valid");
            }  
        }, 1000);
    });
}

cekNama(nama).then(res => {
    console.log(res);
    return cekEmail(email);
})
.then(res => {console.log(res);})
.catch(err => {console.error(err);});

//📌 Soal 4 – Simulasi Belanja Online
//Buatlah tiga function berbasis Promise dengan setTimeout:

function login(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Login berhasil");
        }, 1000);
    });
}

function pilihBarang() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Barang terpilih");   
        }, 1000);
      

    });
}

function Bayar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pembayaran berhasil")
        }, 1000);
    })
}

login().then(res =>{
    console.log(res);
    return pilihBarang();
})
.then(res => {
    console.log(res);
    return Bayar();
})
.then(res => {console.log(res);});

//📌 Soal 5 – Progress Loading
//Buatlah function progress(step) yang mengembalikan Promise dengan setTimeout, hasilnya berupa string:

function progress(step) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Progress: ${step}%`);
        }, 500);
});
}
progress(25).then(res =>{
    console.log(res);
    return progress(50);
})
.then(res => {
    console.log(res);
    return progress(75);
})
.then(res => { 
    console.log(res);
    return progress(100);
})
.then(res => {console.log(res);});