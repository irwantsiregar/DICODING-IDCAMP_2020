Basic Usage
Potongan kode untuk materi ini:

https://repl.it/@dicodingacademy/163-03-shadow-dom-basic-usage?lite=true
https://repl.it/@dicodingacademy/163-03-shadow-dom-styling?lite=true



Untuk melampirkan Shadow DOM pada elemen penggunaan sangat mudah, yaitu dengan menggunakan properti attachShadow pada elemen-nya seperti ini:

# main.js
// Shadow Host
const divElement = document.createElement("div");
 
 
// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";
 
 
// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({mode: "open"});
 
 
// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);
 
 
// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);


#index.html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width">
   <title>Shadow DOM Basic Usage</title>
 </head>
 <body>
 <script src="main.js"></script>
 </body>
</html>/

Jika kita lihat pada browser, maka struktur HTML yang akan dihasilkan adalah seperti ini:

-- gambar.png

Dan struktur DOM tree yang terbentuk akan tampak seperti ini:

-- gambar.png

Dalam penggunaan attachShadow() kita melampirkan objek dengan properti mode yang memiliki nilai ‘open’. Sebenarnya terdapat dua opsi nilai yang dapat digunakan dalam properti mode, yaitu “open” dan “closed”. 

Menggunakan nilai open berarti kita memperbolehkan untuk mengakses properti shadowRoot melalui elemen yang melampirkan Shadow DOM. 

divElement.attachShadow;
properti shadowRoot mengembalikan struktur DOM yang berada pada shadow tree.

-- gambar.gif

Namun jika kita menggunakan nilai closed maka properti shadowRoot akan mengembalikan nilai null. 

const shadowRoot = divElement.attachShadow({mode: "closed"});
divElement.shadowRoot // null;
Hal ini berarti kita sama sekali tidak dapat mengakses Shadow Tree selain melalui variabel yang kita definisikan ketika melampirkan Shadow DOM.

const shadowRoot = divElement.attachShadow({mode: "closed"});
divElement.shadowRoot // null;
shadowRoot // # shadow-root (closed)

-- gambar.png --

Karena Shadow DOM terisolasi dari document tree maka element yang terdapat di dalamnya pun tidak akan terpengaruh oleh styling yang berada diluar dari shadow root-nya.

# index.html
!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width">
   <title>Shadow DOM Basic Usage</title>
   <style>
       h1 {
         color: red;
       }
   </style>
 </head>
 <body>
   <h1>Ini merupakan konten yang berada di Document tree</h1>
   <script src="main.js"></script>
 </body>
</html>/


# main.js
// Shadow Host
const divElement = document.createElement("div");
 
 
// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";
 
 
// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({mode: "open"});
 
 
// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);
 
 
// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);
Jika dilihat pada browser maka hasilnya akan seperti ini:

-- gambar.png --

Berdasarkan hasil di atas, styling hanya akan diterapkan pada elemen <h1> yang berada di document tree. Sedangkan elemen <h1> yang berada pada shadow dom tidak akan terpengaruh dengan styling tersebut. Lantas, bagaimana caranya kita melakukan styling pada Shadow DOM?

Kita dapat melakukannya dengan menambahkan template <style> di dalam shadowRoot.innerHTML.  Contohnya seperti ini:

// menetapkan styling pada Shadow DOM
shadowRoot.innerHTML += `
 <style>
   h1 {
     color: green;
   }
 </style>
`;
Maka element <style> tersebut akan berada di dalam shadow tree dan akan berdampak pada elemen yang ada di dalamnya.

-- gambar.png --