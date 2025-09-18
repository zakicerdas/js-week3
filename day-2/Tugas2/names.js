let names =[];

export function tambahNama(nama){
    names.push(nama);
}

export function hapusNama(nama){
    names = names.filter(n => n !== nama);   
}

export function tampilkanNama(){
    return names;
}