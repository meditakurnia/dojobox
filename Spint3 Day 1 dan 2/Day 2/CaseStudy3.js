var nilai_peserta = parseInt(prompt("Masukan nilai peserta :"))

function nilaiPeserta (nilai) {

    

    if(nilai >=80 && nilai <= 100 ){
        document.write("Nilai kamu A <br>");
    }else if (nilai <=80 && nilai>=60){
        document.write("Andika <br>");
        }else if (nilai <=60 && nilai>=40){
            document.write("Jojo <br>");
            }else if(nilai <=40 && nilai>=20){
                document.write("Data tidak ditemukan <br>");

            }else if(nilai <=20){
                    document.write("Alif <br>");
            }else{
                document.write("Vista <br>");
            }
            return nilai;
    }
    
    //document.write("Nilai yang kamu masukan : "+nilai_peserta+ "<br>")
    document.write("Nilai yang diinput: " +nilaiPeserta(nilai_peserta))

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(nilai)],
    ["Andika", 70.1, nilaiPeserta(nilai)],
    ["Alif", 19, nilaiPeserta(nilai)],
    ["Vista", 102, nilaiPeserta(nilai)]
];
for(var x = 0; x<dataSiswa.length ; x++){
    for(var i = 0; i<3; i++){
        document.write([x][i])
    }
} 


//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
//test