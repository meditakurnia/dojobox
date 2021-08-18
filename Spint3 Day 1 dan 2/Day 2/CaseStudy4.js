/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

var tinggi_badan_pria = parseInt(prompt("Masukan tinggi badan pria : "));
var tinggi_badan_wanita = parseInt(prompt("Masukan tinggi badan wanita :"))

function beratBadanPria(tinggiPria) {

    var hasil1 = ((tinggiPria-100)-(tinggiPria-100)*10/100);
    return hasil1;

}

function beratBadanWanita(tinggiWanita) {
    var hasil2 = ((tinggiWanita-100)-(tinggiWanita-100)*15/100);
    return hasil2;
}

document.write("Berat badan ideal pria dengan tinggi " +tinggi_badan_pria+ " cm adalah : " +beratBadanPria(tinggi_badan_pria)+ "<br>")
document.write("Berat badan ideal wanita dengan tinggi " +tinggi_badan_wanita+ " cm adalah : " +beratBadanWanita(tinggi_badan_wanita)+ "<br>")
