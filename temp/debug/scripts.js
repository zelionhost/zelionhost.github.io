
  document.addEventListener('DOMContentLoaded', () => {
    // 1) Ganti‐ganti warna SVG
    const colors = ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71'];
    let colorIndex = 0;
    const circles = document.querySelectorAll('.loading-project circle');

    function switchColor() {
      const c = colors[colorIndex];
      circles.forEach(circle => circle.setAttribute('fill', c));
      colorIndex = (colorIndex + 1) % colors.length;
    }

    // ganti warna setiap 2 detik
    switchColor(); // langsung ganti sekali pas load
    setInterval(switchColor, 2000);


    // 2) Rotate teks loading
    const texts = [
      'Loading…',
      'Please wait…',
      'Almost there…',
      'Just a moment…'
    ];
    let textIndex = 0;
    const txtEl = document.getElementById('prjloadtxt');

    function switchText() {
      txtEl.textContent = texts[textIndex];
      textIndex = (textIndex + 1) % texts.length;
    }

    // ganti teks setiap 3 detik
    setInterval(switchText, 1500);
  });
