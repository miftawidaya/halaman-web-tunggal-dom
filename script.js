
function generateContent(fragmentId, callback){

  /**
   * Membuat variabel pages yang berisi object yang berisi key dan value
   * key: home, about, contact dan value: teks yang akan ditampilkan
   * properti ini akan diakses dengan fragmentId
   * pages[fragmentId] akan mengembalikan nilai sesuai dengan fragmentId yang diakses pada saat klik menu
   * contoh: jika klik menu about, maka fragmentId = about, maka pages[fragmentId] akan mengembalikan nilai "Ini adalah halaman About"
   */
  var pages = {
      home: "Selamat datang di halaman Home",
      about: "Ini adalah halaman About",
      contact: "Hubungi kami jika ada yang perlu ditanyakan"
    };
  
  /**
   * mengembalikan nilai sesuai dengan fragmentId yang diakses pada saat klik menu
   * contoh: pages["home"] akan mengembalikan nilai "Selamat datang di halaman Home"
   */
  // return pages[fragmentId];

  /**
   *  mengembalikan nilai sesuai dengan fragmentId yang diakses pada saat klik menu dengan
   * callback function yang akan dijalankan pada saat fungsi getContent() dipanggil callback(pages[fragmentId]);
   */
  callback(pages[fragmentId]);
}


// fungsi ini akan menampilkan teks lokasi # pada id app
function loadContent(){
  var contentDiv = document.getElementById("app"); // mengambil id app
  // contentDiv.innerHTML = location.hash; // menampilkan teks lokasi # pada id app contoh: #home

  // menghapus tanda # pada teks lokasi # dengan substring(1) yang berarti menghapus karakter pertama
  fragmentId = location.hash.substring(1);

  // menampilkan teks lokasi # pada id app tanpa tanda #
  contentDiv.innerHTML = "<h1 style='color:green'>" + fragmentId + "</h1>";

  /**
   * memanggil fungsi generateContent() dengan parameter fragmentId dan callback function
   * callback function akan dijalankan pada saat fungsi generateContent() dipanggil callback(content);
   * callback(content) akan menampilkan teks lokasi # pada id app tanpa tanda #
   */
  generateContent(fragmentId, function (content) {
    // menampilkan teks lokasi # pada id app tanpa tanda #
    contentDiv.innerHTML += "<p>" + content + "</p>";
  });
}

// jika tidak ada # pada url, maka tambahkan #hom
if(!location.hash){
  location.hash = "#home";
}

// otomatis memuat fungsi loadContent() pada saat pertama dimuat
// jadi jika tanpa event hashchange, setelah klik menu harus reload manual agar teks lokasi # muncul pada id app
loadContent();

// berfungsi untuk memanggil fungsi loadContent() pada saat terjadi terjadi perubahan hash (#) yang diakibatkan oleh klik menu.
window.addEventListener("hashchange", loadContent);

