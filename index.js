const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

// Token dibaca dari environment variable TOKEN (tab Env di dashboard)
TOKEN = os.getenv("TOKEN");

// Panjang satu "lagu" dalam milidetik (diatur lewat env TRACK_LENGTH_MS)
TRACK_LENGTH_MS = os.getenv("TRACK_LENGTH_MS") || ;

let startTime = Date.now();
let endTime = startTime + TRACK_LENGTH_MS;

function updatePresence() {
    const sekarang = Date.now();

    // Jika lagu sudah habis, reset waktu agar berulang (looping)
    if (sekarang >= endTime) {
        startTime = sekarang;
        endTime = startTime + TRACK_LENGTH_MS;
    }

    const status = new RichPresence(client)
        // Pilih tipe: 'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING'
        .setType(os.getenv("TYPE")
        .setName(os.getenv("NAME") // Nama aplikasi/aktivitas
        .setDetails(os.getenv("DETAILS") // Baris pertama detail
        .setState(os.getenv("STATE") // Baris kedua detail
        // Mengatur waktu berjalan (seperti Spotify)
        .setStartTimestamp(startTime)
        .setEndTimestamp(endTime)
        // Gambar lewat mp:external (link proxy internal Discord)
        .setAssetsLargeImage(os.getenv("ASSETS_LARGE_IMAGE")
        // Menambahkan Tombol (Buttons)
        .addButton(os.getenv("BUTTON_1_LABEL"), os.getenv("BUTTON_1_URL")
        .addButton(os.getenv("BUTTON_2_LABEL"), os.getenv("BUTTON_2_URL");

    // Menerapkan status ke akun
    client.user.setActivity(status);
}

client.on('ready', async () => {
    console.log(`Self-bot aktif sebagai: ${client.user.tag}`);

    // Jalankan pertama kali
    updatePresence();
    console.log('Custom Activity berhasil diterapkan!');

    // Interval cek setiap 2 detik untuk memastikan transisi looping mulus
    setInterval(updatePresence, 2000);
});

client.login(TOKEN);
