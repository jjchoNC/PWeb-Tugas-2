function tambah() {
    let a = parseFloat(document.getElementById("angka1").value)
    let b = parseFloat(document.getElementById("angka2").value)
    let final = a + b
    document.getElementById("hasil").innerHTML = "Hasil: " + final;
}