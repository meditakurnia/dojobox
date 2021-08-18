var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

var perkalian = x*y;
var pengurangan = y - x;
var penjumlahan = x+y;
var pembagian = y/x;

document.write("Hasil perkalian x*y adalah : " +perkalian+ "<br>");
document.write("Hasil pembagian x/y adalah : " +pembagian+ "<br>");
document.write("Hasil penjumlahan x+y adalah : " +penjumlahan+ "<br>");
document.write("Hasil pengurangan x-y adalah : " +pengurangan+ "<br>");

var bil1 = parseInt("Masukan bilagan pertama");
var bil2 = parseInt("Masukan bilangan kedua");


function kurang(x,y){
    var hasilKurang = x-y;
    document.write("hasil kurang :" +hasilKurang+ '<br>')
}

function tambah(){
    document.write("hasil penjumlahan" +(bil1 +bil2)+ "<br>")
}

function hasilKali(x,y){
    return x*y;
}

var hasilBagi = function(x,y){
    return x/y;
}