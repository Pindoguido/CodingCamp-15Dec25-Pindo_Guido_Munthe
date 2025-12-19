const welcomeText = document.getElementById('welcomeText');

let userName = prompt("Masukkan nama Anda:");
if (userName && userName.trim() !== "") {
  welcomeText.textContent = `Hai ${userName}, Welcome To Nuvé Skin`;
} else {
  welcomeText.textContent = "Hai Pengunjung,Welcome To Nuvé Skin";
}

const form = document.getElementById('contactForm');
const outputText = document.getElementById('outputText');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const tgl = document.getElementById('tgl').value;
  const gender = document.getElementById('gender').value;
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !tgl || !gender || !pesan) {
    alert('Semua kolom wajib diisi!');
    return;
  }

  outputText.innerHTML = `
    <strong>Nama:</strong> ${nama}<br>
    <strong>Tanggal Lahir:</strong> ${tgl}<br>
    <strong>Jenis Kelamin:</strong> ${gender}<br>
    <strong>Pesan:</strong> ${pesan}
  `;

  form.reset();
});