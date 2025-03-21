document.getElementById("hitungBtn").addEventListener("click", function () {
  const sisiInput = document.getElementById("sisi");
  const hasilDiv = document.getElementById("hasil");

  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi) || sisi <= 0) {
    hasilDiv.innerHTML = "<p>Mohon masukkan nilai sisi yang valid (lebih dari 0).</p>";
    return;
  }

  const luas = sisi * sisi;
  const keliling = 4 * sisi;

  hasilDiv.innerHTML = `<p>Luas Persegi: <strong>${luas} cm²</strong></p>
                          <p>Keliling Persegi: <strong>${keliling} cm</strong></p>`;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("sisi").value = "";
  document.getElementById("hasil").innerHTML = "";
});
