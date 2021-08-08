// penandaa buat perubahan
//alert('test');
//for dan array tidak boleh dibuat variabel

// var namaVariable = '12'; //camelcase
// document.write(typeof(namaVariable) + '<br>');
// namaVariabel = true;
// document.write(typeof(namaVariable)+ '<br>');
// namaVariabel = 123;
// document.write(typeof(namaVariable)+ '<br>');

// var namaPengunjung = prompt("Silahkan masukan nama kamu", "Meditaa" + '<br>')
// document.write('Hai'+namaPengunjung + ',Selamat datang di Dojobox.ID' + '<br>');

// var konfirmasi = confirm("Mau tetap disini kan ?");
// var hasil = (konfirmasi==true)? "Iyadong" : "Gak deh..";
// document.write(hasil);

// var angka = parseInt(prompt("masukan angka yang mau ditest :"));
// if(angka>10){
//     document.write("bilangan yang dimasukan lebih dari 10");
// }   else{
//     document.write("bilangan yang dimasukan tidak terpenuhi");
//     }

// var nilai = prompt("masukan angka :");
// if(nilai %2==0){
//     document.write(nilai +' ' + 'merupakan bilangan genap');
// } else if(nilai%2==1){
//     document.write(nilai+ ' '+'merupakan bilangan ganjil');
// }else{
//     document.write(nilai + ' ' + 'bukan bilangan ganjil dan genap');
// }

// var nilaiKepuasan = prompt("Masukan nilai kepausan anda","0-5");

// switch(nilaiKepuasan){
//     case '0':
//         document.write("Saya sangat kecewa");
//         break
//     case '1':
//         document.write("Saya kecewa");
//         break
//     case '2':
//         document.write('Saya tidak puas');
//         break
//     case '3' :
//         document.write("Saya biasa aja");
//         break
//     case '4' :
//         document.write("saya sangat puas");
//         break
//     case '5' :
//         document.write("saya sanat sangat puas");
//         default :
//         document.write("masukan angkka yang sesuai")
// }

var nilaiKepuasan = parseInt(prompt("Masukan nilai kepausan anda","0-100"));

switch(true){
    case (nilaiKepuasan>=90):
        document.write("Grade A");
        break
    case (nilaiKepuasan>=80):
        document.write("Grade B");
        break
    case (nilaiKepuasan>=70):
        document.write('Grade C');
        break
    case (nilaiKepuasan>=60) :
        document.write("Grade D");
        default :
        document.write("Grade E")
}


