// //Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

// //Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 

//Soal 1

var panjang_balok = parseInt(prompt('Masukan panjang balok : '))
var lebar_balok = parseInt(prompt('Masukan lebar balok : '))
var tinggi_balok = parseInt(prompt('Masukan tinggi balok : '))

function luasPermukaanBalok(panjang,lebar,tinggi){
    luasBalok = (2*(panjang*lebar)) + (2*(panjang*tinggi)) +(2*(lebar*tinggi));
    return luasBalok;
}

function volumeBalok(panjang,lebar,tinggi){
    volumeBalok = panjang*lebar*tinggi
    return volumeBalok;
}

document.write('Luas permukaan balok adalah ' +luasPermukaanBalok(panjang_balok,lebar_balok,tinggi_balok)+ '<br>')
document.write('Volume balok adalah adalah ' +volumeBalok(panjang_balok,lebar_balok,tinggi_balok) )

//Soal 2

var masukan_nama = prompt('Masukan nama user : ');

if(masukan_nama == 'Budi'){
    document.write("Boleh masuk!")
}else if(masukan_nama == 'Adi'){
    document.write("Boleh masuk!")
}else if(masukan_nama == 'Gunawan'){
    document.write("Boleh masuk!")
}else if(masukan_nama == 'Joko'){
    document.write("Boleh masuk!")
}else if(masukan_nama == 'Bambang'){
    document.write("Boleh masuk!")
}else{
    document.write("Tidak boleh masuk!")
}