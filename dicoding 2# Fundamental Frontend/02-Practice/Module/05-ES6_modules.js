## ES6 Modules
Jika kita berada di luar environment Node.js, contohnya browser, kita tetap bisa melakukan impor dan ekspor module JavaScript dengan menggunakan keyword import dan export yang tersedia mulai dari ES6.

Sebelum adanya fitur ini, kita hanya menggunakan tag <script> pada HTML untuk menggunakan berkas JavaScript. Semakin banyak berkas JavaScript yang digunakan, semakin banyak pula tag <script> dituliskan. Nah, dengan menggunakan fitur export dan import, kita cukup menggunakan satu tag <script> yang merupakan berkas JavaScript utama (biasanya diberi nama main.js, app.js, atau index.js).

Pada saat ini, fitur ES6 module standarnya tidak diaktifkan pada browser. Namun kita dapat mengaktifkan fitur ini dengan mudah, yakni dengan menambahkan attribute type=”module” pada tag <script> yang kita gunakan.

<script src="app.js" type="module"></script>
Tidak seluruh browser dapat mengaktifkan fitur tersebut. Tapi jangan khawatir, setidaknya browser yang banyak digunakan sekarang sudah mendukung fitur ES6 Modules. Berikut rincian detailnya:

Google Chrome: Versi 61+
Mozilla Firefox: Versi 60+
Safari: 10.1+
Microsoft Edge: 16+