
/* 

Buatlah sebuah fungsi dengan ketetuan  
1. Jika user menginputkan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo] 
2. Jika user menginputkan "ta" maka mencetak isi array [Adib, Valen, Vista] 
3. Jika user menginputkan "Admin" maka mencetak isi array [Aura, Cahya]
 */

var masukan = prompt('Masukan salah satu user berikut : ')
var mentor = ['Aakhmad', 'Alif', 'Andika', 'Jojo'];
var ta = ['Adib', 'Valen', 'Vista'];
var admin = ['Aura', 'Cahya'];


     if(masukan=='mentor'){
         document.write('List mentor : ' +mentor)
     }else if(masukan=='ta'){
         document.write('List ta : ' +ta)
     }else if(masukan=='admin'){
         document.write('List admin : ' +admin)
     } else{
         document.write('Maaf inputan anda tidak valid!')
     }

document.write(pilih(masukan));