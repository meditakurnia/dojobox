// var namaVariable 
//const = nama variable tidak pernah berubah, misal phi 
//const = tidak boleh digunakan di prompt, di hardcord boleh

// var angka = 20;
// if(angka % 2 === 0){
//     //kondisi true
//     document.write(angka + "angka merupakan bilangan genap");
// }else{
//     document.write(angka + "merupakan bilangan ganjil");

// }

// var ulang = 0;

// while (ulang<=10){
//     document.write('halo dojobers' + '<br>');
//     ulang += 1; //ditingkatkan variabel + 1 kaya i++ di for
// }

// var ulang = confirm("ulang lagi?")
// while (true){
//     console.log('hai dojo');
//     ulang += 1;
// }

// for(var iterator = 1; iterator<=10;iterator++){
//     document.write('Haloo dunia tipu*'+ '<br>');
// }
// var siswa = 1;
// while (siswa<=5){
//     document.write('Siswa dengan nomer induk' +' ' + siswa + ' ' + 'member TA Vista' + '<br>');
//     ulang += 1; 
// }

// //var siswa2 = 6
// for(var siswa2 = 6; siswa2<=10; siswa2++){
//     document.write('Siswa dengan nomer induk' +' ' + siswa2 + ' ' + 'member TA Intan' + '<br>');
// }

// var siswa = 1;
// while (siswa <= 5){
//     document.write('Siswa dengan nomer induk' +siswa+ 'member TA Vista <br>');
//     ulang += 1; 
// }

// for(var siswa2 = 6; siswa2 <= 10; siswa2++){
//     document.write('Siswa dengan nomer induk' +siswa2+ 'member TA Intan <br>');
// }

var vista = 1;
while(vista <= 5){
    document.write('siswa dengan nomor induk '+vista+' adalah member TA Vista <br>');
    vista += 1;
}

for(var intan = 6; intan <= 10; intan++){
    document.write('siswa dengan nomor induk '+intan+' adalah member TA Intan <br>');
}


var buah = [];
buah = ['apel', 'duku', 'salak', 'blimbing', 'pisang', 'cependeak'];

// document.write(typeof(buah) + '<br>');
// document.write(buah);
// document.write('<br>');
// document.write(buah.length);
// document.write('<br>');
// document.write(buah[4]);

// var iniFungsi = function (){
//     alert('hai dojober');
// }

// var myArr = ['teks', 1234, true, iniFungsi, [2,3,4]]
// document.write('<br>');
// document.write(myArr[4][1]);

// myArr2= [];
// myArr2[0] = 'senin';
// myArr2[1] = 'selasa';
// myArr2[3] ='kamis';
//1. join array
// document.write(buah.join('<br>'));

//2. push dan pop
//push menambah element terakhir dan pop menghapus elemen terakhir
buah.push('durian');
// document.write(buah.join('<br>'));

buah.pop()
// document.write(buah.join('<br>'));

//3. shift dan unshit
//unshift menamabah element diawal dan shift menghapus element diawal
buah.unshift('mangga');
// document.write(buah.join('<br>'));

buah.shift();
// document.write(buah.join('<br>'));

//4. splice (indexawal, jmlhapus,elementbaru1, ..., elemenbarukeN)
buah.splice(1,1,'avocado','pir');
document.write(buah.join('<br>'));


//5. Slice : memotong dan mensub array kan array ke dalam array baru
var newBuah = buah.slice(1,4);
document.write('<br>');
document.write('<br>')
document.write(newBuah.join('<br>'));
document.write('<br>')

buah.forEach(function(e,i){
    document.write(i+ '=' + e + "<br>")
});
document.write('<br>')
buah.forEach(function(a,i){
    document.write((i+1) + '.' + a + "<br>")
});

//map => mengembalikan array : parameter boleh salah satu dan maks 2 hanya foreach dan map
var buahBaru = buah.map(function(e,i){
    return e + ' enak dimakan';
});
document.write('<br>')
document.write('<br>')

document.write(buahBaru.join('<br>'));