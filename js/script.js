document.getElementById('hitungBMI').addEventListener('click', function () {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // convert cm ke meters

    if (!berat || !tinggi || berat <= 0 || tinggi <= 0) {
        alert('Masukkan data yang valid!');
        return;
    }

    const bmi = (berat / (tinggi * tinggi)).toFixed(1);
    let status;

    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi}`;
    document.getElementById('bmiStatus').textContent = `Status: ${status}`;
    document.getElementById('hasil').style.display = 'block';
});
