//Kalkulator Modular
//Buat 3 file JS: math.js (isi fungsi tambah, kurang, kali, bagi), string.js (isi fungsi ubah huruf besar/kecil), dan index.js untuk mengimpor lalu mencoba semua fungsi.
import { tambah, kurang, kali, bagi } from './math.js';

console.log(tambah(10, 3)); 
console.log(kurang(5, 3)); 
console.log(kali(2, 3));
console.log(bagi(3, 3)); 

import { besar, kecil } from './string.js';

console.log(besar("halo")); 
console.log(kecil("HALO"));