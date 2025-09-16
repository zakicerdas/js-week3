import prayerTime from "./komponen/prayerTime.js"

const prayerTimes = await prayerTime();
const jadwalss = prayerTimes.waktu.data.jadwal;
const lokasi = prayerTimes.location;

 const prayerTimeList = [
     { name: "Subuh", jadwal: jadwalss.subuh },
     { name: "Dzuhur", jadwal: jadwalss.dzuhur },
     { name: "Ashar", jadwal: jadwalss.ashar },
     { name: "Maghrib", jadwal: jadwalss.maghrib },
     { name: "Isya", jadwal: jadwalss.isya }
 ];

function render() {
    const prayerTimeDiv = document.getElementById("prayerTime");
    prayerTimeDiv.innerHTML = "";
    for (let index = 0; index < prayerTimeList.length; index++) {
        const element = document.createElement("div");
        
        element.innerHTML = 
        `<div class ="name">${prayerTimeList[index].name}</div>
        <div class ="jadwal">${prayerTimeList[index].jadwal}</div>
        
        `
        prayerTimeDiv.appendChild(element)
    }
}
console.log(jadwalss);
console.table(prayerTimeList);

render();