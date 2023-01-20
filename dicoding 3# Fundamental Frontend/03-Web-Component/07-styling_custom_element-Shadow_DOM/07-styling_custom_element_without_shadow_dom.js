Styling Custom Element without Shadow DOM
Potongan kode untuk materi ini: https://repl.it/@dicodingacademy/163-03-styling-without-shadow-dom?lite=true



Tidak ada cara khusus dalam menetapkan styling pada custom elemen jika tidak menerapkan Shadow DOM. Kita dapat menetapkan styling dengan cara yang sama seperti standar element HTML. Dalam arti kita bisa menggunakan nama tag sebagai selector, atribut id ataupun class sebagai selector-nya.

Pada custom element biasanya kita menuliskan styling dengan menggunakan tag <style> pada saat merender template HTML menggunakan innerHTML.

class ImageFigure extends HTMLElement {
 
......
 
 render() {
    this.innerHTML = `
      <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
 
        figure > img {
          max-width: 220px;
        }
 
        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>
 
      <figure>
        <img src="${this.src}"
            alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
 }
 
......
}
 
customElements.define("image-figure", ImageFigure);
Ataupun dengan menuliskan styling pada berkas css yang ditautkan pada html.

/* Berkas style.css */
figure {
   border: thin #c0c0c0 solid;
   display: flex;
   flex-flow: column;
   padding: 5px;
   max-width: 220px;
   margin: auto;
}
 
figure > img {
   max-width: 220px;
}
 
figure > figcaption {
   background-color: #222;
   color: #fff;
   font: italic smaller sans-serif;
   padding: 3px;
   text-align: center;
}
Maka pada browser akan menampilkan hasil seperti berikut:

-- tampil hasil script di browser ---

Kita tidak menetapkan Shadow DOM pada custom element ini sehingga styling pada custom element masih dapat terpengaruh oleh keadaan dari luar. Maksudnya, jika kita menetapkan styling lain dengan menargetkan figure sebagai selector, kemungkinan element <figure> yang terdapat pada custom element akan ikut terpengaruhi walaupun kita sudah menetapkan styling secara eksplisit di dalam fungsi render. Lantas bagaimana agar custom element dapat terenkapsulasi dari gangguan luar? Kita akan membahas ini lebih detail pada pembahasan Shadow DOM.

