var dataSiswa = [
    ["Jojo", 55.5, 'A'],
    ["Andika", 70.1, 'D'],
    ["Alif", 19, 'B'],
    ["Vista", 102, 'C']
];

// var buah = [];
// buah = ['apel','belimbing','cempedak','duku', 'salak','pisang'];
// buah.length;
// buah[1];

document.write(dataSiswa[1][0] + '<br>')

for (var i = 0; i<dataSiswa.length; i++){
    //loop dimensi pertama
    for(var j = 0;j<dataSiswa[i].length;j++){
        console.log(dataSiswa[i][j])
    }
}

var nama = 'andika';

function cetakNama(sapa){
    console.log('nama saya ' +sapa)

}

function menyapa (){
    cetakNama()
    console.log('selamat malam')
}