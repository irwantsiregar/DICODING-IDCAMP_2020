## What is Shadow DOM?
Saat ini kita mungkin bisa menerapkan konsep enkapsulasi dengan menggunakan <iframe> agar komponen terpisah dari gangguan luar. Namun teknik ini bukan cara yang baik, berat, dan dapat menimbulkan masalah. Lantas bagaimana solusinya? Gunakanlah Shadow DOM.

Shadow DOM dapat mengisolasi sebagian struktur DOM di dalam komponen sehingga tidak dapat disentuh dari luar komponen atau nodenya. Singkatnya kita bisa sebut Shadow DOM sebagai “DOM dalam DOM”. Bagaimana ia bekerja? Perhatikan ilustrasi berikut:

--- gambar ilustrasi cara kerja Shadow DOM ---
Sumber: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

Shadow DOM dapat membuat DOM Tree lain terbentuk secara terisolasi melalui host yang merupakan komponen dari regular DOM Tree (Document Tree). Shadow DOM Tree ini dimulai dari root bayangan (Shadow root), yang dibawahnya dapat memiliki banyak element lagi layaknya Document Tree.

Terdapat beberapa terminologi yang perlu kita ketahui dari ilustrasi di atas:

Shadow host : Merupakan komponen/node yang terdapat pada regular DOM di mana shadow DOM terlampir pada komponen/node ini.
Shadow tree : DOM Tree di dalam shadow DOM.
Shadow boundary : Batas dari shadow DOM dengan regular DOM.
Shadow root : Root node dari shadow tree.

Kita dapat memanipulasi elemen yang terdapat di dalam shadow tree layaknya pada document tree, namun cakupannya selama kita berada di dalam shadow boundary. Dengan kata lain, jika kita berada di document tree kita tidak dapat memanipulasi elemen bahkan menerapkan styling pada elemen yang terdapat di dalam shadow tree. Itulah mengapa shadow DOM dapat membuat komponen terenkapsulasi.

