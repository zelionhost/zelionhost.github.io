   
    async function debugRenderSemuaKategori() {
  try {
    const res = await fetch('soal.json');
    const data = await res.json();

    const grouped = data.reduce((acc, item) => {
      if (!acc[item.kategori]) acc[item.kategori] = [];
      acc[item.kategori].push(item);
      return acc;
    }, {});

    const container = document.getElementById('all-kategori-container');
    container.innerHTML = ''; // clr sblm render
    for (const kategori in grouped) {
      const section = document.createElement('section');
      section.className = 'kategori-section';
      section.innerHTML = `
        <h2>${kategori}</h2>
        ${grouped[kategori].map(q => `
          <div class="soal-card">
            <p><strong>Q:</strong> ${q.tanya}</p>
            <p><strong>A:</strong> ${q.jawab}</p>
          </div>
        `).join('')}
      `;
      container.appendChild(section);
    }
    
    console.log("✅ Render kategori selesai.");
  } catch (err) {
    console.error('❌ Gagal fetch soal.json:', err);
    document.getElementById('all-kategori-container').innerHTML = '<p style="color:red">Gagal memuat data soal.</p>';
  }
}

async function tutupRender(){
  var elementtos = document.getElementById('all-kategori-container');
  elementtos.innerHTML= '';
}