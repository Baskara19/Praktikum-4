function mulaiQuiz() {
    let uts = promptAngka("Masukkan nilai UTS:");
    let uas = promptAngka("Masukkan nilai UAS:");
    let tugas = promptAngka("Masukkan nilai Tugas:");
  
    const nilaiArray = [uts, uas, tugas];
    const rata = hitungRata(nilaiArray);
    const hasil = tampilHasil(rata);
  
    // Simpan ke localStorage
    localStorage.setItem("uts", uts);
    localStorage.setItem("uas", uas);
    localStorage.setItem("tugas", tugas);
    localStorage.setItem("rata", rata.toFixed(2));
    localStorage.setItem("status", hasil.status);
    localStorage.setItem("grade", hasil.grade);
  }
  
  function promptAngka(pesan) {
    let nilai;
    do {
      nilai = parseFloat(prompt(pesan));
    } while (isNaN(nilai) || nilai < 0 || nilai > 100);
    return nilai;
  }
  
  function hitungRata(valuesArray) {
    const total = valuesArray.reduce((acc, val) => acc + val, 0);
    return total / valuesArray.length;
  }
  
  function tampilHasil(rata) {
    let status, grade, className;
  
    if (rata >= 80) {
      grade = "A";
      status = "Lulus";
      className = "lulus";
    } else if (rata >= 60) {
      grade = "B";
      status = "Remedial";
      className = "remedial";
    } else {
      grade = "C";
      status = "Tidak Lulus";
      className = "tidak-lulus";
    }
  
    const hasilDiv = document.getElementById("hasilQuiz");
    hasilDiv.innerHTML = `Rata-rata: ${rata.toFixed(2)}<br>Status: ${status}<br>Grade: ${grade}`;
    hasilDiv.className = className;
  
    return { status, grade };
  }
  
  function ulangQuiz() {
    localStorage.clear();
    document.getElementById("hasilQuiz").innerHTML = "";
    document.getElementById("hasilQuiz").className = "";
  }
  