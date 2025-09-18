export function cekGanjilGenap(num) {
    if(num % 2 === 0){
        return "Genap";
    }else{
        return "Ganjil";
    }
}

export function balikString (str){
    return str.split("").reverse().join("");
}

export function randomNumber(){
   return Math.floor(Math.random() * 100) + 1;
}
