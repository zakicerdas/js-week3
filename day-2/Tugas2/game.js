let jawaban = Math.floor(Math.random() * 1000000000) + 1;

export function tebakAngka(tebakan){
    if (tebakan === jawaban){
        return "Selamat, tebakan Anda benar!";
    }else {
        return "Tebakan Anda salah, coba lagi!";
    }

}   