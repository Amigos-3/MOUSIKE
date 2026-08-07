/* ============================================================
   MOESIK - LOGIKA WEBSITE (tidak perlu diedit)
   ============================================================ */

const FAV_KEY = "moesik_favorites";
let currentAudioEl = null; // audio yang sedang diputar (agar hanya 1 lagu main di satu waktu)

/* ---------- FAVORITES (localStorage) ---------- */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function isFavorite(id) {
  return getFavorites().includes(id);
}
function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter((f) => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

/* ---------- SIDEBAR ---------- */
function setupSidebar() {
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const closeBtn = document.querySelector(".sidebar-close");
  if (!menuBtn || !sidebar || !overlay) return;

  const open = () => {
    sidebar.classList.add("open");
    overlay.classList.add("open");
  };
  const close = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  };
  menuBtn.addEventListener("click", open);
  overlay.addEventListener("click", close);
  if (closeBtn) closeBtn.addEventListener("click", close);
}

/* ---------- HELPERS ---------- */
function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

function pickRandom(arr, excludeIds = []) {
  const pool = arr.filter((s) => !excludeIds.includes(s.id));
  const source = pool.length ? pool : arr;
  return source[Math.floor(Math.random() * source.length)];
}

function pickRandomN(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

/* ---------- SONG CARD (dipakai di beranda & favorite) ---------- */
/**
 * Membuat 1 kartu lagu yang bisa berganti lagu (skip/back) secara mandiri.
 * @param {object} initialSong - lagu awal yang ditampilkan di kartu ini
 * @param {object} opts - { allowShuffle: boolean } jika true, tombol skip akan
 *   mengambil lagu acak lain dari seluruh SONGS (dipakai di halaman beranda).
 *   Jika false, kartu ini statis mengikuti 1 lagu saja (dipakai untuk lagu favorit developer).
 */
function createSongCard(initialSong, opts = {}) {
  const { allowShuffle = false, songPool = SONGS } = opts;

  const card = document.createElement("div");
  card.className = "song-card";

  const history = []; // stack lagu sebelumnya, untuk tombol "back"
  let current = initialSong;

  card.innerHTML = `
    <div class="song-cover-wrap">
      <img class="song-cover" src="${current.cover}" alt="${current.title}">
      <button class="heart-btn" title="Simpan ke favorite">&#9829;</button>
    </div>
    <div class="song-info">
      <div class="song-title"></div>
      <div class="progress-row">
        <span class="time-current">0:00</span>
        <input type="range" class="progress-bar" min="0" max="100" value="0" step="0.1">
        <span class="time-duration">0:00</span>
      </div>
      <div class="controls-row">
        ${allowShuffle ? '<button class="back-btn" title="Sebelumnya">&#9198;</button>' : ""}
        <button class="play-btn" title="Play/Pause">&#9658;</button>
        ${allowShuffle ? '<button class="skip-btn" title="Acak lagu lain">&#9197;</button>' : ""}
      </div>
    </div>
    <audio class="song-audio" src="${current.audio}" preload="metadata"></audio>
  `;

  const img = card.querySelector(".song-cover");
  const titleEl = card.querySelector(".song-title");
  const heartBtn = card.querySelector(".heart-btn");
  const playBtn = card.querySelector(".play-btn");
  const backBtn = card.querySelector(".back-btn");
  const skipBtn = card.querySelector(".skip-btn");
  const range = card.querySelector(".progress-bar");
  const timeCur = card.querySelector(".time-current");
  const timeDur = card.querySelector(".time-duration");
  const audio = card.querySelector(".song-audio");

  function refreshHeart() {
    const liked = isFavorite(current.id);
    heartBtn.classList.toggle("liked", liked);
  }

  function loadSong(song, { keepPlaying = false } = {}) {
    current = song;
    img.src = song.cover;
    img.alt = song.title;
    titleEl.textContent = song.title;
    audio.src = song.audio;
    range.value = 0;
    timeCur.textContent = "0:00";
    timeDur.textContent = formatTime(song.duration || 0);
    playBtn.innerHTML = "&#9658;"; // ▶
    refreshHeart();
    if (keepPlaying) {
      audio.play().then(() => {
        playBtn.innerHTML = "&#10073;&#10073;"; // pause-ish
      }).catch(() => {});
    }
  }

  loadSong(current);

  heartBtn.addEventListener("click", () => {
    toggleFavorite(current.id);
    refreshHeart();
    document.dispatchEvent(new CustomEvent("moesik:favorites-changed"));
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      if (currentAudioEl && currentAudioEl !== audio) {
        currentAudioEl.pause();
      }
      audio.play();
      currentAudioEl = audio;
      playBtn.innerHTML = "&#10073;&#10073;";
    } else {
      audio.pause();
      playBtn.innerHTML = "&#9658;";
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    if (isFinite(audio.duration)) {
      timeDur.textContent = formatTime(audio.duration);
      range.max = audio.duration;
    }
  });
  audio.addEventListener("timeupdate", () => {
    range.max = audio.duration || current.duration || 100;
    range.value = audio.currentTime;
    timeCur.textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener("ended", () => {
    playBtn.innerHTML = "&#9658;";
  });
  range.addEventListener("input", () => {
    audio.currentTime = range.value;
  });

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      const wasPlaying = !audio.paused;
      history.push(current);
      const next = pickRandom(songPool, [current.id]);
      audio.pause();
      loadSong(next, { keepPlaying: wasPlaying });
      if (wasPlaying) currentAudioEl = audio;
    });
  }
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (!history.length) return;
      const wasPlaying = !audio.paused;
      const prev = history.pop();
      audio.pause();
      loadSong(prev, { keepPlaying: wasPlaying });
      if (wasPlaying) currentAudioEl = audio;
    });
  }

  document.addEventListener("moesik:favorites-changed", refreshHeart);

  return card;
}

/* ---------- RENDER GRID (beranda / favorite) ---------- */
function renderSongGrid(container, songs, { emptyText = "Belum ada lagu." } = {}) {
  container.innerHTML = "";
  if (!songs.length) {
    const p = document.createElement("div");
    p.className = "empty-msg";
    p.textContent = emptyText;
    container.appendChild(p);
    return;
  }
  songs.forEach((song) => {
    container.appendChild(createSongCard(song, { allowShuffle: true, songPool: SONGS }));
  });
}

document.addEventListener("DOMContentLoaded", setupSidebar);
