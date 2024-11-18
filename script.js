document.getElementById("hitung-button").addEventListener("click", function () {
  const umur = parseInt(document.getElementById("umur").value);
  const berat = parseFloat(document.getElementById("berat").value);
  const jenisKelamin = document.querySelector(
    'input[name="jenis_kelamin"]:checked'
  )?.value;
  const aktivitas = parseFloat(
    document.getElementById("tingkat-aktivitas").value
  );

  if (isNaN(umur) || isNaN(berat) || !jenisKelamin) {
    alert("Harap isi semua data dengan benar.");
    return;
  }

  let waterIntake = berat * 30;

  if (aktivitas > 0) {
    waterIntake *= 1 + aktivitas;
  }

  if (umur > 50) {
    waterIntake *= 0.85;
  }

  if (jenisKelamin === "perempuan") {
    waterIntake *= 0.9;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>Hasil</h2><p>Kebutuhan air harian Anda adalah <strong>${waterIntake.toFixed(
    2
  )} ml</strong>.</p>`;
});
