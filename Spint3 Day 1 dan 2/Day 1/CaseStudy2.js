
var nilai_peserta = parseInt(prompt("Masukan nilai peserta :"))

function nilaiPeserta (nilai) {

    if(nilai >=80 && nilai <= 100 ){
        document.write("Nilai kamu A <br>");
    }else if (nilai <=80 && nilai>=60){
        document.write("Nilai kamu B <br>");
        }else if (nilai <=60 && nilai>=40){
            document.write("Nilai kamu C <br>");
            }else if(nilai <=40 && nilai>=20){
                document.write("Nilai kamu D <br>");

            }else if(nilai <=20){
                    document.write("Nilai kamu E <br>");
            }else{
                document.write("Maaf inputan kamu salah <br>");
            }
            return nilai;
    }
           
    //document.write("Nilai yang kamu masukan : "+nilai_peserta+ "<br>")
    document.write("Nilai yang diinput: " +nilaiPeserta(nilai_peserta))
    
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */


/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/