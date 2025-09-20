//1. Ambil data user dari API publik
async function ambilData() {
    try {
        let dataJSON = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await dataJSON.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
    
}
//ambilData();

//2. Ambil daftar post, cek jumlahnya
async function postData() {
try{
    let postjSON = await fetch("https://jsonplaceholder.typicode.com/posts");
    let post = await postjSON.json();

    let jumlah = post.length;
    console.log("jumlah post:", jumlah);

if (post.length > 50) {
    console.log("banyak postingan");
} else {
    console.log("jumlah post sedikit");
}
}catch(error){
    console.error(error.message);
}
}

postData();

//3. Promise manual dengan setTimeout
function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function tesDelay() {
    console.log("mulai delay...");
    await delay(2000);
    console.log("selesai menunggu!");
}

tesDelay();

//4. Fetch dengan URL salah
async function UrlPalsu() {
try {
    let palsuJSON = await fetch("https://jsonplaceholderFake.typicode.com/posts");
    let palsu = await palsuJSON.json();
        console.log(palsu);
} catch (error) {
    console.error("Gagal mengambil data API", error.message);
}
}

UrlPalsu();

//5. Cek status API
async function CekStatus() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1.");
        if (response.ok === true) {
            let data = await response.json();
            console.log("Data berhasil diambil:", data);
        } else {
            throw new Error("API tidak bisa diakses");
        }
    } catch (error) {
        console.error(error.message);
    }
}
CekStatus();

//6. Promise.all
async function fetchMultiple() {
    try {
        let [usersRes, postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);
        const data = await Promise.all([usersRes.json(), postsRes.json()]);

        console.log (data);
    } catch (error) {
        throw new Error("Gagal mengambil data");
    }
}

//fetchMultiple()

//7. Chaining Promise
function chainingPromise() {
    return new Promise((resolve) => {
     resolve(5)   
    })
     .then((angka) => {
      console.log("Awal:", angka);
      return angka * 2;
    })
    .then((hasil) => {
      console.log("Setelah ×2:", hasil);
      return hasil * 3;
    })
    .then((final) => {
      console.log("Setelah ×3:", final);
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      console.log("Proses selesai ");
    });
}

chainingPromise();

//8. Async function dengan throw error
async function cekNumber(num) {
    try {
        if ( num % 2 !== 0){
            throw new Error("angka ganjil tidak diperbolehkan!");
        }else{
            console.log("angka ini valid");
        }
    } catch (error) {
        console.error(error.message);
    }
    
}
cekNumber(7);

//9. Fetch dengan parameter
async function getPostsById(Id) {
    try {
        let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
        if (Id > 100 || !post.ok ) {
            throw new Error("post tidak ada!");
            
        }else{
            let show = await post.json();
            console.log("judul:",show.title)
        }
    } catch (error) {
        console.error(error.message);
    }
}
getPostsById(150);
getPostsById(50);

//10. Loop fetch dengan async/await
async function fetchLoop() {
    try {
        for (let id = 1; id <= 3; id++) {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          
            if (!res.ok) {
                throw new Error(`Gagal mengambil data untuk ID ${id}`);
            }
            let post = await res.json();
            console.log(`user ${id}:`,post.title);

        }
    }catch (error) {
        console.error(error.message)
    }
}
fetchLoop();

//11. Fetch data todos
async function fetchTodos() {
    try {
        let todos = await fetch("https://jsonplaceholder.typicode.com/todos/5");
        let data = todos.json();
            console.log(`data:${data.title}`);
        if (data.completed) {
            console.log("selesai!");
        }else{
            console.log("belum selesai!");
        }
    } catch (error) {
        console.error(error.message);
    }
}
fetchTodos();

//12. Promise reject
const PromiseReject = new Promise((resolve, reject) => {
  reject("data gagal diproses!");
});

PromiseReject
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error.message);
});

//13. Try/catch nested
async function nestedTry() {
    try {
        console.log("BUBADIBAKO");
        try {
            console.log("buat baik dibalas koko");
        } catch (errDalam) {
            console.log(errDalam.message);
        }
    } catch (errUtama) {
        console.log(errUtama.message);
    }
}
nestedTry();

//14. Fetch gambar
async function fetchGambar() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
     return new Promise((resolve, reject) => {
        if (res.ok) {
            resolve(res.json());
        } else {
            reject(new Error("Gagal mengambil gambar"));
        }
        });
    } catch (error) {
        console.error(error.message);
    }
}
fetchGambar();

//15. Delay dengan fetch
function delayFetch(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  }).then(() => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1");
  });
}

delayFetch("https://jsonplaceholder.typicode.com/posts/1", 3000)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err.message));

//16. Promise.race
async function promiseRace() {
    const API1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const API2 = fetch("https://jsonplaceholder.typicode.com/posts/2");


    try {
         const winner = await Promise.race([API1, API2]);
         const data = await winner.json();
            console.log("pemenangnya",data.title);
    } catch (error) {
        console.error(error.message);
    }
}

promiseRace();

//17. Fetch JSON invalid
async function fetchInvalidJson() {
  try {
    const response = await fetch("https://example.com");
    const data = await response.json(); 
    console.log("Data JSON:", data);
  } catch (err) {
    console.error("Parsing JSON gagal:", err.message);
  }
}

fetchInvalidJson();

//18. Fungsi async recursive
async function asyncRecursive(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await asyncRecursive(num - 1);
    console.log("Selesai memanggil =", num);
}
asyncRecursive(3);

//19. Error manual di fetch
async function fetchManual() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    if (!res.ok){
        throw new Error("Email tidak ada")
    } 
     const data = await res.json();
     console.log("email :", data)
    } catch (error) {
        console.error(error.message);
    }
    
}
fetchManual();

//20. Kombinasi Promise + async
function getData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; 
    setTimeout(() => {
      if (success) {
        resolve("Data berhasil diambil");
      } else {
        reject(new Error("Gagal mengambil data"));
      }
    }, 1000);
  });
}

(async function main() {
  try {
    const result = await getData();
    console.log("Hasil:", result);
  } catch (err) {
    console.error(err.message);
  }
})();







