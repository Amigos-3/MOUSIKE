/* ============================================================
   MOESIK - DATA WEBSITE
   ============================================================
   INI ADALAH FILE UTAMA YANG PERLU KAMU EDIT.

   1. DAFTAR LAGU (SONGS)
      - title  : judul lagu - nama artis
      - cover  : path ke gambar cover lagu (taruh file gambar langsung di folder ini)
      - audio  : path ke file musik (taruh file mp3 langsung di folder ini)
      - duration : lama lagu dalam detik (misal 3:46 = 226 detik).
                   Ini hanya angka cadangan yang tampil sebelum file audio
                   selesai dimuat, durasi asli akan otomatis mengikuti file mp3-nya.

   2. DATA PROFILE developer (PROFILES)
      - username     : nama akun yang tampil besar di halaman profile
      - photo        : path ke foto profile (taruh file gambar langsung di folder ini)
      - tagLabel     : teks tag/link sosial media yang tampil (misal "@instagram_kamu")
      - tagLink      : URL asli akun sosial media (misal "https://instagram.com/username")
      - pseudonim, latarBelakang, tanggalLahir : biodata singkat
      - motivasi     : tulisan motivasi bebas
      - favoriteSong : lagu favorit developer (title, cover, audio, duration)
   ============================================================ */

const SONGS = [
  {
    id: "s1",
    title: "Judul Lagu 1 - Nama Artis 1", // GANTI judul & artis
    cover: "cover-1.svg",   // GANTI dengan gambar cover asli
    audio: "lagu-1.mp3",     // GANTI dengan file musik asli
    duration: 226
  },
  {
    id: "s2",
    title: "Judul Lagu 2 - Nama Artis 2",
    cover: "cover-2.svg",
    audio: "lagu-2.mp3",
    duration: 383
  },
  {
    id: "s3",
    title: "Judul Lagu 3 - Nama Artis 3",
    cover: "cover-3.svg",
    audio: "lagu-3.mp3",
    duration: 201
  },
  {
    id: "s4",
    title: "Judul Lagu 4 - Nama Artis 4",
    cover: "cover-4.svg",
    audio: "lagu-4.mp3",
    duration: 244
  },
  {
    id: "s5",
    title: "Judul Lagu 5 - Nama Artis 5",
    cover: "cover-5.svg",
    audio: "lagu-5.mp3",
    duration: 190
  },
  {
    id: "s6",
    title: "Judul Lagu 6 - Nama Artis 6",
    cover: "cover-6.svg",
    audio: "lagu-6.mp3",
    duration: 268
  },
  {
    id: "s7",
    title: "Judul Lagu 7 - Nama Artis 7",
    cover: "cover-7.svg",
    audio: "lagu-7.mp3",
    duration: 215
  },
  {
    id: "s8",
    title: "Judul Lagu 8 - Nama Artis 8",
    cover: "cover-8.svg",
    audio: "lagu-8.mp3",
    duration: 233
  }
  // Tambahkan lagu baru dengan menyalin format di atas (id harus unik, misal "s9")
];

const PROFILES = [
  {
    id: "dev1",
    file: "profile-1.html",
    username: "@username_1",              // GANTI nama akun
    photo: "profile-photo-1.svg", // GANTI dengan foto asli
    tagLabel: "@akun_sosmed_1",            // GANTI teks tag yang tampil
    tagLink: "https://instagram.com/",     // GANTI dengan link sosmed asli
    pseudonim: "Nama Panggilan 1",
    latarBelakang: "Tulis latar belakang akademik di sini",
    tanggalLahir: "01 Januari 2000",
    motivasi: "Tulis motivasi developer 1 di sini.",
    favoriteSong: {
      title: "Judul Lagu Favorit 1 - Nama Artis",
      cover: "cover-1.svg",
      audio: "lagu-1.mp3",
      duration: 226
    }
  },
  {
    id: "dev2",
    file: "profile-2.html",
    username: "@username_2",
    photo: "profile-photo-2.svg",
    tagLabel: "@akun_sosmed_2",
    tagLink: "https://instagram.com/",
    pseudonim: "Nama Panggilan 2",
    latarBelakang: "Tulis latar belakang akademik di sini",
    tanggalLahir: "01 Januari 2000",
    motivasi: "Tulis motivasi developer 2 di sini.",
    favoriteSong: {
      title: "Judul Lagu Favorit 2 - Nama Artis",
      cover: "cover-2.svg",
      audio: "lagu-2.mp3",
      duration: 383
    }
  },
  {
    id: "dev3",
    file: "profile-3.html",
    username: "@username_3",
    photo: "profile-photo-3.svg",
    tagLabel: "@akun_sosmed_3",
    tagLink: "https://instagram.com/",
    pseudonim: "Nama Panggilan 3",
    latarBelakang: "Tulis latar belakang akademik di sini",
    tanggalLahir: "01 Januari 2000",
    motivasi: "Tulis motivasi developer 3 di sini.",
    favoriteSong: {
      title: "Judul Lagu Favorit 3 - Nama Artis",
      cover: "cover-3.svg",
      audio: "lagu-3.mp3",
      duration: 201
    }
  }
];
