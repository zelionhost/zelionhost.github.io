const huruf = [
  // Hiragana (ひらがな)
  { karakter: 'あ', bacaan: 'a', tipe: 'hiragana' },
  { karakter: 'い', bacaan: 'i', tipe: 'hiragana' },
  { karakter: 'う', bacaan: 'u', tipe: 'hiragana' },
  { karakter: 'え', bacaan: 'e', tipe: 'hiragana' },
  { karakter: 'お', bacaan: 'o', tipe: 'hiragana' },
  { karakter: 'か', bacaan: 'ka', tipe: 'hiragana' },
  { karakter: 'き', bacaan: 'ki', tipe: 'hiragana' },
  { karakter: 'く', bacaan: 'ku', tipe: 'hiragana' },
  { karakter: 'け', bacaan: 'ke', tipe: 'hiragana' },
  { karakter: 'こ', bacaan: 'ko', tipe: 'hiragana' },
  { karakter: 'さ', bacaan: 'sa', tipe: 'hiragana' },
  { karakter: 'し', bacaan: 'shi', tipe: 'hiragana' },
  { karakter: 'す', bacaan: 'su', tipe: 'hiragana' },
  { karakter: 'せ', bacaan: 'se', tipe: 'hiragana' },
  { karakter: 'そ', bacaan: 'so', tipe: 'hiragana' },
  { karakter: 'た', bacaan: 'ta', tipe: 'hiragana' },
  { karakter: 'ち', bacaan: 'chi', tipe: 'hiragana' },
  { karakter: 'つ', bacaan: 'tsu', tipe: 'hiragana' },
  { karakter: 'て', bacaan: 'te', tipe: 'hiragana' },
  { karakter: 'と', bacaan: 'to', tipe: 'hiragana' },
  { karakter: 'な', bacaan: 'na', tipe: 'hiragana' },
  { karakter: 'に', bacaan: 'ni', tipe: 'hiragana' },
  { karakter: 'ぬ', bacaan: 'nu', tipe: 'hiragana' },
  { karakter: 'ね', bacaan: 'ne', tipe: 'hiragana' },
  { karakter: 'の', bacaan: 'no', tipe: 'hiragana' },
  { karakter: 'は', bacaan: 'ha', tipe: 'hiragana' },
  { karakter: 'ひ', bacaan: 'hi', tipe: 'hiragana' },
  { karakter: 'ふ', bacaan: 'fu', tipe: 'hiragana' },
  { karakter: 'へ', bacaan: 'he', tipe: 'hiragana' },
  { karakter: 'ほ', bacaan: 'ho', tipe: 'hiragana' },
  { karakter: 'ま', bacaan: 'ma', tipe: 'hiragana' },
  { karakter: 'み', bacaan: 'mi', tipe: 'hiragana' },
  { karakter: 'む', bacaan: 'mu', tipe: 'hiragana' },
  { karakter: 'め', bacaan: 'me', tipe: 'hiragana' },
  { karakter: 'も', bacaan: 'mo', tipe: 'hiragana' },
  { karakter: 'や', bacaan: 'ya', tipe: 'hiragana' },
  { karakter: 'ゆ', bacaan: 'yu', tipe: 'hiragana' },
  { karakter: 'よ', bacaan: 'yo', tipe: 'hiragana' },
  { karakter: 'ら', bacaan: 'ra', tipe: 'hiragana' },
  { karakter: 'り', bacaan: 'ri', tipe: 'hiragana' },
  { karakter: 'る', bacaan: 'ru', tipe: 'hiragana' },
  { karakter: 'れ', bacaan: 're', tipe: 'hiragana' },
  { karakter: 'ろ', bacaan: 'ro', tipe: 'hiragana' },
  { karakter: 'わ', bacaan: 'wa', tipe: 'hiragana' },
  { karakter: 'を', bacaan: 'wo', tipe: 'hiragana' },
  { karakter: 'ん', bacaan: 'n', tipe: 'hiragana' },

  // Katakana (カタカナ)
  { karakter: 'ア', bacaan: 'a', tipe: 'katakana' },
  { karakter: 'イ', bacaan: 'i', tipe: 'katakana' },
  { karakter: 'ウ', bacaan: 'u', tipe: 'katakana' },
  { karakter: 'エ', bacaan: 'e', tipe: 'katakana' },
  { karakter: 'オ', bacaan: 'o', tipe: 'katakana' },
  { karakter: 'カ', bacaan: 'ka', tipe: 'katakana' },
  { karakter: 'キ', bacaan: 'ki', tipe: 'katakana' },
  { karakter: 'ク', bacaan: 'ku', tipe: 'katakana' },
  { karakter: 'ケ', bacaan: 'ke', tipe: 'katakana' },
  { karakter: 'コ', bacaan: 'ko', tipe: 'katakana' },
  { karakter: 'サ', bacaan: 'sa', tipe: 'katakana' },
  { karakter: 'シ', bacaan: 'shi', tipe: 'katakana' },
  { karakter: 'ス', bacaan: 'su', tipe: 'katakana' },
  { karakter: 'セ', bacaan: 'se', tipe: 'katakana' },
  { karakter: 'ソ', bacaan: 'so', tipe: 'katakana' },
  { karakter: 'タ', bacaan: 'ta', tipe: 'katakana' },
  { karakter: 'チ', bacaan: 'chi', tipe: 'katakana' },
  { karakter: 'ツ', bacaan: 'tsu', tipe: 'katakana' },
  { karakter: 'テ', bacaan: 'te', tipe: 'katakana' },
  { karakter: 'ト', bacaan: 'to', tipe: 'katakana' },
  { karakter: 'ナ', bacaan: 'na', tipe: 'katakana' },
  { karakter: 'ニ', bacaan: 'ni', tipe: 'katakana' },
  { karakter: 'ヌ', bacaan: 'nu', tipe: 'katakana' },
  { karakter: 'ネ', bacaan: 'ne', tipe: 'katakana' },
  { karakter: 'ノ', bacaan: 'no', tipe: 'katakana' },
  { karakter: 'ハ', bacaan: 'ha', tipe: 'katakana' },
  { karakter: 'ヒ', bacaan: 'hi', tipe: 'katakana' },
  { karakter: 'フ', bacaan: 'fu', tipe: 'katakana' },
  { karakter: 'ヘ', bacaan: 'he', tipe: 'katakana' },
  { karakter: 'ホ', bacaan: 'ho', tipe: 'katakana' },
  { karakter: 'マ', bacaan: 'ma', tipe: 'katakana' },
  { karakter: 'ミ', bacaan: 'mi', tipe: 'katakana' },
  { karakter: 'ム', bacaan: 'mu', tipe: 'katakana' },
  { karakter: 'メ', bacaan: 'me', tipe: 'katakana' },
  { karakter: 'モ', bacaan: 'mo', tipe: 'katakana' },
  { karakter: 'ヤ', bacaan: 'ya', tipe: 'katakana' },
  { karakter: 'ユ', bacaan: 'yu', tipe: 'katakana' },
  { karakter: 'ヨ', bacaan: 'yo', tipe: 'katakana' },
  { karakter: 'ラ', bacaan: 'ra', tipe: 'katakana' },
  { karakter: 'リ', bacaan: 'ri', tipe: 'katakana' },
  { karakter: 'ル', bacaan: 'ru', tipe: 'katakana' },
  { karakter: 'レ', bacaan: 're', tipe: 'katakana' },
  { karakter: 'ロ', bacaan: 'ro', tipe: 'katakana' },
  { karakter: 'ワ', bacaan: 'wa', tipe: 'katakana' },
  { karakter: 'ヲ', bacaan: 'wo', tipe: 'katakana' },
  { karakter: 'ン', bacaan: 'n', tipe: 'katakana' },

  // Kanji (漢字) - Dasar
  { karakter: '日', bacaan: 'nichi', tipe: 'kanji' }, // Matahari/Hari
  { karakter: '月', bacaan: 'tsuki', tipe: 'kanji' }, // Bulan
  { karakter: '火', bacaan: 'hi', tipe: 'kanji' }, // Api
  { karakter: '水', bacaan: 'mizu', tipe: 'kanji' }, // Air
  { karakter: '木', bacaan: 'ki', tipe: 'kanji' }, // Pohon
  { karakter: '金', bacaan: 'kane', tipe: 'kanji' }, // Emas/Uang
  { karakter: '土', bacaan: 'tsuchi', tipe: 'kanji' }, // Tanah
  { karakter: '人', bacaan: 'hito', tipe: 'kanji' }, // Orang
  { karakter: '山', bacaan: 'yama', tipe: 'kanji' }, // Gunung
  { karakter: '川', bacaan: 'kawa', tipe: 'kanji' }, // Sungai
  { karakter: '田', bacaan: 'ta', tipe: 'kanji' }, // Sawah
  { karakter: '口', bacaan: 'kuchi', tipe: 'kanji' }, // Mulut
  { karakter: '目', bacaan: 'me', tipe: 'kanji' }, // Mata
  { karakter: '手', bacaan: 'te', tipe: 'kanji' }, // Tangan
  { karakter: '足', bacaan: 'ashi', tipe: 'kanji' }, // Kaki
  { karakter: '子', bacaan: 'ko', tipe: 'kanji' }, // Anak
  { karakter: '女', bacaan: 'onna', tipe: 'kanji' }, // Perempuan
  { karakter: '男', bacaan: 'otoko', tipe: 'kanji' }, // Laki-laki
  { karakter: '学', bacaan: 'gaku', tipe: 'kanji' }, // Belajar
  { karakter: '生', bacaan: 'sei', tipe: 'kanji' }, // Hidup
];
  
  let skor = 0;
  let hurufSekarang;
  
  // Fungsi untuk memilih huruf acak
  function pilihHurufAcak() {
    const randomIndex = Math.floor(Math.random() * huruf.length);
    hurufSekarang = huruf[randomIndex];
    document.getElementById('question').textContent = hurufSekarang.karakter;
  }
  
  // Fungsi untuk memeriksa jawaban
  function periksaJawaban() {
    const jawaban = document.getElementById('answer').value.toLowerCase();
    if (jawaban === hurufSekarang.bacaan) {
      document.getElementById('result').textContent = 'Benar! 🎉';
      skor++;
    } else {
      document.getElementById('result').innerHTML = `Salah! Jawaban yang benar adalah "${hurufSekarang.bacaan}". <a href='TABELHURUF.html'>Tabel Huruf</a>`;
    }
    document.getElementById('score').textContent = `Skor: ${skor}`;
    document.getElementById('answer').value = '';
    pilihHurufAcak();
  }
  
  // Event listener untuk tombol submit
  document.getElementById('submit').addEventListener('click', periksaJawaban);
  
  // Mulai game
  pilihHurufAcak();