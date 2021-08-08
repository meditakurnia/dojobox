//Soal B

var barang = [];
barang = ['monitor', 'keyboard', 'mouse', 'headset','komputer'];

var harga = [];
harga = [100000,50000,50000,60000,5000000];

function detailBarang(barang, harga, jumlah){

    var totalHarga

    totalHarga = ((barang*harga)*jumlah);

    return totalHarga;
}
function Barang(totalHarga,diskon){

    var diskon
    var totalHarga
    var jumlahTotal

    jumlahTotal = (totalHarga-(diskon));

    return jumlahTotal;

}

function cariBarang(a){
    var barang = [];
    barang = ['monitor', 'keyboard', 'mouse', 'headset','komputer'];

    if(barang == a){
        document.write(barang(totalHarga,diskon))
    } else{
        document.write("Maaf barang yang anda cari tidak ditemukan");
    }
}




//SOAL A

function tambahBuku(){
    var namaBuku = prompt("Masukan nama buku");
    var judulBuku = prompt("Masukan judul buku");
    
}
