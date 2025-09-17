import buku from './books.json' with { type: 'json' };

export function getAllBooks() {
    console.log(buku);
}

let nextID = buku.length + 1;
export function addBook(judul, penulis, tahun) {
     buku.push({id: nextID, judul: judul, penulis: penulis, tahun: tahun});
    return buku;
}
export function findBookByTitle(judul) {
    return buku.find(b => b.judul.toLowerCase() === judul.toLowerCase());
}