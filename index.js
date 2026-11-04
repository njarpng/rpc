const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

// Masukkan Token Akun Discord Anda di sini
const TOKEN = 'TOKEN_AKUN_DISCORD_ANDA'; 

client.on('ready', async () => {
    console.log(`Self-bot aktif sebagai: ${client.user.tag}`);

    // Membuat instance Rich Presence
    const status = new RichPresence(client)
        // Pilih tipe: 'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING'
        .setType('LISTENING') 
        .setName('Spotify') // Nama aplikasi/aktivitas
        .setDetails('Tell Me How? - Snuzzle') // Baris pertama detail
        .setState('Please come to me, heal my lonely soul') // Baris kedua detail
        
        // Mengatur waktu berjalan (seperti Spotify)
        .setStartTimestamp(Date.now()) 
        
        // 2. CARA MENAMBAHKAN GAMBAR LEWAT mp:external
        // Menggunakan format link proxy internal Discord
        .setAssetsLargeImage('mp:external/tH6OOmCqAptNcr4Vl8vHBA0Q5wXN9x5GZc5z0j1JpQY/https/i.scdn.co/image/ab67616d0000b2736b0870ed2ef54c866d5b00c5') 
        .setAssetsLargeText('! Njarr.')
        
        // Menambahkan Tombol (Buttons)
        .addButton('My Spotify', 'https://open.spotify.com/user/31mo2ge36jsg27jcieljeqkn4mly?si=hFmNeye-SfaRcIgyEIyvGg&utm_source=copy-link...')
        .addButton('My Instagram', 'https://www.instagram.com/anjarrmdhni...');

    // Menerapkan status ke akun
    client.user.setActivity(status);
    console.log('Custom Activity berhasil diterapkan!');
});

client.login(TOKEN);
