function Bootstrap (info){
document.querySelector(".third").addEventListener('click', function(){
var gagal="Kami ucapkan dengan berat hati <br><b style='color: red;'>MOHON MAAF ANDA TIDAK TERPILIH</b><br> menjadi bagian dari <br> <b>PERS BIRAMA UNIKOM</b>. <br><br> <p style='text-align: justify;'>Semoga kalian tetap belajar jurnalistik dimanapun yaa,tetap semangat!kami tunggu di lain kesempatan! Kami selaku panitia sangat berterima kasih kepada kalian karena sudah berpartisipasi dan bekerja sama dalam proses magang ini.</p>"
var lolos="Kami ucapkan dengan senang hati <br><b style='color: green;'>SELAMAT ANDA TERPILIH</b><br> menjadi bagian dari <br> <b>PERS BIRAMA UNIKOM</b>  <br><br> <p style='text-align: justify;'>Semoga yang terpilih amanah,dapat menjalankan kewajiban dengan baik,dan mengikuti segala kegiatan di pers birama. Kami selaku panitia sangat berterima kasih kepada kalian karena sudah berpartisipasi dan bekerja sama dalam proses magang ini.</p>";
var info=0;

if(info==0){
    Swal.fire({
    title: "Gintriana Kurniadi Putra",
    html: gagal,
    confirmButtonText: "OKE, SEMANGAT!!",
    confirmButtonColor: "#00008B",
    reverseButtons: true,
  });
}else{
    Swal.fire({
    title: "Gintriana Kurniadi Putra",
    html: lolos,  
    confirmButtonText: "OKE, SEMANGAT!!",
    confirmButtonColor: "#00008B",
    reverseButtons: true,
  });
}
});
}
