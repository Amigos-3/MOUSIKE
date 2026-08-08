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
    title: "Tití Me Preguntó - Bad Bunny", // GANTI judul & artis
    cover: "Titi me pergunta .jpeg",   // GANTI dengan gambar cover asli
    audio: "Tití Me Preguntó - Bad Bunny.mp3",     // GANTI dengan file musik asli
    duration: 243
  },
  {
    id: "s2",
    title: "4K - El Alfa, Darell Noriel",
    cover: "4k.jpeg",
    audio: "4K - El Alfa, Darell Noriel .mp3",
    duration: 201
  },
  {
    id: "s3",
    title: "1000X - Ghea Indrawari",
    cover: "1000x.jpeg",
    audio: "1000X - Ghea Indrawari .mp3",
    duration: 250
  },
  {
    id: "s4",
    title: "Anything You Want - Reality Club",
    cover: "anything you want.jpeg",
    audio: "Anything You Want - Reality Club.mp3",
    duration: 236
  },
  {
    id: "s5",
    title: "Can't Help Falling in Love - Elvis Presley",
    cover: "can't help falling in love.jpeg",
    audio: "Can't Help Falling in Love - Elvis Presley.mp3",
    duration: 182
  },
  {
    id: "s6",
    title: "Multo - Cup of Joe",
    cover: "cover-6.svg",
    audio: "Multo - Cup of Joe.mp3",
    duration: 237
  },
  {
    id: "s7",
    title: "The Fate of Ophelia - Taylor Swift",
    cover: "the fate of ophelia.jpeg",
    audio: "The Fate of Ophelia - Taylor Swift.mp3",
    duration: 229
  },
  {
    id: "s8",
    title: "Jealousy - Khalil Harrison, LeeMcKrazy, Ceeka RSA",
    cover: "jealousy.jpeg",
    audio: "Jealousy - Khalil Harrison, LeeMcKrazy, Ceeka RSA.mp3",
    duration: 292
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
    username: "Berlin",
    photo: "dev2.jpeg",
    tagLabel: "@Liēn",
    tagLink: "https://www.instagram.com/berltheline?igsh=YWNueHZoZW84dDM1",
    pseudonim: "Berliēn Theoline",
    latarBelakang: "SMK Jurusan Teknik Komputer dan Jaringan",
    tanggalLahir: "25 Juni 2009",
    motivasi: "Tidak ada yang tahu jalan kehidupanmu, dengan siapa engkau bertemu, menjalani kehidupan. Terimalah apapun yang terjadi, berjuanglah demi yang memang pantas diperjuangkan.",
    favoriteSong: {
      title: "Jealousy - Khalil Harrison, LeeMcKrazy, Ceeka RSA",
      cover: "jealousy.jpeg",
      audio: "Jealousy - Khalil Harrison, LeeMcKrazy, Ceeka RSA.mp3",
      duration: 392
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
