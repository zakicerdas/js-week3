import { alarm, jamDinding, loading, cekNomor } from "./komponen/fungsi.js";

//1.
alarm();

//2.
jamDinding();

//3.
loading()

//4.
cekNomor(7).then(res => console.log(res)).catch(err => console.log(err));

//5.
function ambiluser(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("data user: budi");
        }, 5000);
    })
}
async function angkaa(){
    let hasil = await ambiluser();
    console.log(hasil)
}
angkaa()
//Cetak "Data User: Budi" setelah selesai.