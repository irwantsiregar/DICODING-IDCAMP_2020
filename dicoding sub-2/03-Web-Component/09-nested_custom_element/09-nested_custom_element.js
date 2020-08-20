##  Nested Custom Element
Potongan kode untuk materi ini: https://repl.it/@dicodingacademy/163-03-nested-custom-element?lite=true



Ketika menggunakan custom element, mungkin terdapat keadaan di mana kita membutuhkan custom element berada di dalam custom element lain. Contohnya, banyak website saat ini yang menampilkan data berupa list, entah itu daftar artikel ataupun item belanja. 

Biasanya setiap daftar yang ditampilkan ditampung dalam sebuah container <div>. Kemudian item yang sama ditampilkan secara berulang dengan data yang berbeda pada container tersebut.

-- disini animasi hasil script ---

Web component dapat memudahkan dalam mengorganisir daftar item yang ditampilkan dalam bentuk list menggunakan container. Caranya kita membuat dua custom element yatu container, dan itemnya. Container digunakan untuk menampung elemen item di dalamnya. Selain itu pada container juga data (array) diberikan. Nantinya container-lah yang akan membuat elemen item di dalamnya berdasarkan data yang diberikan.

Belum terbayang seperti apa? Berikut contohnya:

-- disini file index,script, dll  ---

Pada kode di atas kita bisa melihat bahwa terdapat dua buah custom component yaitu <article-list> dan <article-item>. Pada article-list.js terdapat fungsi setter articles yang berfungsi untuk menyimpan nilai articles pada properti this._articles. 

 set articles(articles) {
   this._articles = articles;
   this.render();
 }
Kemudian properti tersebut digunakan pada fungsi render() untuk ditampilkan satu persatu melalui <article-item>.

render() {
   this._articles.forEach(article => {
     const articleItemElement = document.createElement("article-item");
     // memanggil fungsi setter article() pada article-item.
     articleItemElement.article = article;
     this.appendChild(articleItemElement);
   })
 }
Dengan begitu, untuk menampilkan data pada script.js akan lebih mudah. Kita tidak perlu melakukan proses perulangan lagi di sana karena proses tersebut langsung dilakukan ketika menggunakan element <article-list>. Kita cukup memberikan nilai array yang akan ditampilkan.

import "./article-list.js";
import articles from "./articles.js";
 
const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;
 
document.body.appendChild(articleListElement);

Semakin mudah kita menggunakan sebuah element maka akan semakin baik bukan? Walaupun terlihat agak sedikit merepotkan dalam membuatnya, perlu Anda ingat bahwa  web component ini bersifat reusable. Artinya, jika kita ingin membuat komponen serupa, kita tidak perlu membuatnya dari awal.

Dengan menjalankan kode di atas, maka hasilnya akan tampak seperti ini:

-- disini animasi hasil script ---