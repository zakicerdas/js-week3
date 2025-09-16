export default async function prayerTime() {
    const city = 1104 //ini ID location tangerang

      const date = new Date().toISOString().split("T")[0]//ISOOString itu zona waktu internasional
    const getLocation = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
     const getPrayerTime = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${city}/${date}`)

    const dataLocation = await getLocation.json();
    const dataPrayerTimes = await getPrayerTime.json();

    return {
        location: dataLocation,
        waktu: dataPrayerTimes
}
}
prayerTime();