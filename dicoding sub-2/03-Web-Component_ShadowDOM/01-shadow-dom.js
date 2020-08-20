## Shadow DOM
Halaman website yang ditampilkan terbentuk dari HTML. HTML sangat membantu kita karena ia cukup mudah dipelajari dan digunakan. HTML mudah dipahami oleh kita namun tidak untuk mesin, sehingga terciptalah DOM (Document Object Model) sebagai penghubung antara HTML dengan bahasa pemrograman. Di dalam DOM seluruh struktur HTML dapat digambarkan dalam bentuk objek yang dapat dimanipulasi melalui bahasa pemrograman, salah satunya JavaScript.

Ketika browser memuat halaman, HTML akan secara otomatis dimodelkan menjadi sebuah object dan nodes hingga membentuk “DOM Tree”. Berikut contoh DOM Tree yang terbuat:

-- gambar ilustrasi DOM Tree ---

Dari struktur HTML berikut:

<html>
  <head>
    <title>Web Components</title>
  </head>
  <body>
    <h1>Mari belajar Shadow DOM</h1>
  </body>
</html>
Object dan nodes yang dihasilkan dari DOM akan memiliki properti dan method yang dapat kita manfaatkan untuk memanipulasi konten di dalamnya. Seluruh elemen dan style pada HTML (apapun yang berada di dalam DOM) akan terekspos secara global dan nilainya dapat kita peroleh dari mana saja. Biasanya untuk mendapatkan element kita gunakan document.querySelector, setelah itu kita dapat leluasa mengontrol elemen, mengubah konten di dalamnya ataupun mengubah styling yang diterapkan.



Encapsulation
Saat ini banyak web yang dibangun melalui arsitektur berbasis komponen sehingga diharapkan komponen tersebut dapat digunakan kembali. Namun bukankah tidak baik jika komponen tersebut dapat diganggu dan diubah dari luar? Sebaiknya komponen dapat bertahan dari gangguan luar agar secara visual atau fungsinya agar tetap dalam keadaan aslinya. Maka dari itu, kita perlu menerapkan konsep enkapsulasi pada komponen tersebut.