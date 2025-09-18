let buku = [
{

    "id": 1,
    "judul": "One Piece",
    "penulis": "Eiichiro Oda",
    "tahun": 1997
  },
  {
    "id": 2,
    "judul": "Naruto",
    "penulis": "Masashi Kishimoto",
    "tahun": 1999
  }
];



let nextID = buku.length + 1;
export function tambahBuku(judul, penulis, tahun) {
     buku.push({id: nextID, judul: judul, penulis: penulis, tahun: tahun});
    return buku;
}
export function cariBuku(judul) {
    return buku.find(b => b.judul.toLowerCase() === judul.toLowerCase());
}
export function hapusBuku(id) {
    buku = buku.filter(book => book.id !== id);
    return buku;
}