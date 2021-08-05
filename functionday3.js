
var a = parseInt(prompt("Masukan sisi kubus a :"));
var b = parseInt(prompt("Masukan sisi kubus ke 2 :"));


function jumlahVolumeKubus (a,b){
    var volume1
    var volume2
    var totalVolume
    
    volume1 = a*a*a
    volume2 = b*b*b

    totalVolume = volume1 + volume2;

    return volume1+volume2;
}

document.write('Sisi Kubus a' +a);
document.write('Volume Kubus a' +volume1);
document.write('Sisi Kubus b' +b);
document.write('Volume Kubus b' +volume2);
document.write("Jumlah volume 1 + volume 2 = " +totalVolume);
