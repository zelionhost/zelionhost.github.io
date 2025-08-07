    // === Theme Logic ===
    function changeTheme(theme) {
      document.body.className = 'theme-' + theme;
      localStorage.setItem('temaMajelisV2', theme);
    }
    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem('temaMajelisV2') || 'light';
      document.getElementById('themeSelector').value = saved;
      changeTheme(saved);
    });

    // === Existing Quiz / Favorit Code (tidak diubah) ===
    const STORAGE_KEY = 'favoritMajelis';
    let semuaSoal = [], filteredSoal = [], sisaSoal = [], currentSoal = null;

    async function loadSoal() {
      try {
        const res = await fetch('soalSastraIndonesia.json');
        semuaSoal = await res.json();
        populateCategories();
        applyFilters();
      } catch (e) {
        document.getElementById('pertanyaan').textContent = 'Gagal memuat soal.';
        console.error(e);
      }
    }

    function populateCategories() {
      const sel = document.getElementById('category');
      const cats = Array.from(new Set(semuaSoal.map(s => s.kategori)));
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        sel.appendChild(opt);
      });
    }

    function applyFilters() {
      const kw = document.getElementById('search').value.toLowerCase();
      const cat = document.getElementById('category').value;
      filteredSoal = semuaSoal.filter(s => {
        const matchCat = (cat === 'Semua') || (s.kategori === cat);
        const matchKw  = !kw || s.tanya.toLowerCase().includes(kw) || s.jawab.toLowerCase().includes(kw);
        return matchCat && matchKw;
      });
      resetSoal();
      tampilkanNext();
    }

    function resetSoal() {
      sisaSoal = filteredSoal.slice();
      document.getElementById('btnBerikutnya').textContent = 'Pertanyaan Acak';
      document.getElementById('jawaban').style.display = 'none';
      updateProgress();
      updateFavoriteButton();
    }

    function updateProgress() {
      const shown = filteredSoal.length - sisaSoal.length;
      const total = filteredSoal.length;
      const el = document.getElementById('progress');
      if (total === 0) {
        el.textContent = 'Tidak ada pertanyaan untuk filter ini.';
      } else {
        el.textContent = `Pertanyaan ke ${shown + (sisaSoal.length>0?1:0)} dari ${total}`;
      }
    }

    function tampilkanNext() {
      const pertEl = document.getElementById('pertanyaan');
      const jawEl  = document.getElementById('jawaban');
      const btn    = document.getElementById('btnBerikutnya');

      if (sisaSoal.length === 0) {
        pertEl.textContent = '— Semua pertanyaan telah ditampilkan —';
        btn.textContent = 'Ulangi Ujian';
        jawEl.style.display = 'none';
        currentSoal = null;
        updateProgress();
        updateFavoriteButton();
        return;
      }

      const idx = Math.floor(Math.random() * sisaSoal.length);
      currentSoal = sisaSoal.splice(idx, 1)[0];
      pertEl.textContent = currentSoal.tanya;
      jawEl.textContent = currentSoal.jawab;
      jawEl.style.display = 'none';

      if (sisaSoal.length === 0) btn.textContent = 'Ulangi Ujian';
      updateProgress();
      updateFavoriteButton();
    }

    function handleBerikutnya() {
      const btn = document.getElementById('btnBerikutnya');
      if (btn.textContent === 'Ulangi Ujian') {
        resetSoal();
        tampilkanNext();
      } else {
        tampilkanNext();
      }
    }

    function tampilkanJawaban() {
      document.getElementById('jawaban').style.display = 'block';
    }

    function getFavorit() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    }
    function saveFavorit(list) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
    function isFavorit(soal) {
      return getFavorit().some(f => f.tanya === soal.tanya);
    }
    function toggleFavorit() {
      if (!currentSoal) return;
      let fav = getFavorit();
      if (isFavorit(currentSoal)) {
        fav = fav.filter(f => f.tanya !== currentSoal.tanya);
      } else {
        fav.push(currentSoal);
      }
      saveFavorit(fav);
      updateFavoriteButton();
      renderFavoritList();
    }
    function updateFavoriteButton() {
      const btn = document.getElementById('btnFavorit');
      if (currentSoal && isFavorit(currentSoal)) {
        btn.textContent = '★ Hapus Favorit';
      } else {
        btn.textContent = '☆ Favorit';
      }
    }
    function renderFavoritList() {
      const listEl = document.getElementById('listFavorit');
      const fav = getFavorit();
      listEl.innerHTML = '';
      if (fav.length === 0) {
        listEl.innerHTML = '<li>Belum ada soal favorit.</li>';
        return;
      }
      fav.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <strong>Q:</strong> ${item.tanya}<br>
            <strong>A:</strong> ${item.jawab}
            <button class="btn-delete" onclick="hapusFavorit(${idx})">Hapus</button>
          </div>`;
        listEl.appendChild(li);
      });
    }
    function hapusFavorit(idx) {
      let fav = getFavorit();
      fav.splice(idx, 1);
      saveFavorit(fav);
      renderFavoritList();
      updateFavoriteButton();
    }
    function toggleLihatFavorit() {
      const panel = document.getElementById('favorite-list');
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        renderFavoritList();
        panel.style.display = 'block';
      }
    }

    window.onload = loadSoal;