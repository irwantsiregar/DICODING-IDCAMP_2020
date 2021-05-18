function main() {
   // Base URL digunakan utk membuat nilai yang sama ketika variabel dipanggil
  const baseUrl = "https://web-server-book-dicoding.appspot.com";

  // Fungsi ini digunakan utkk mendapatkan daftar buku yang ada pada Web API kemudian menampilkan ke client
    const getBook = () => {
        const xhr = new XMLHttpRequest();

        // Menetapkan callback jika response sukses dan error.
        xhr.onload = function() {
          const responseJson = JSON.parse(this.responseText);
          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllBooks(responseJson.books);
          }
        }

        xhr.onerror = function() {
          showResponseMessage();
        }

        // Membuat GET request dan menetapkan target URL
        xhr.open("GET", `${baseUrl}/list`);
        // Mengirimkan request
        xhr.send();
    };


// Fungsi ini digunakan untuk menambahkan data buku melalui Web API
    const insertBook = (book) => {
        // Membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // Menetapkan callback jika response sukses dan error
        xhr.onload = function() {
          const responseJson = JSON.parse(this.responseText);
          showResponseMessage(responseJson.message);
          getBook();
        }

        xhr.onerror = function() {
          showResponseMessage();
        }

        // Membuat POST request dan menetapkan target URL
        xhr.open("POST", `${baseUrl}/add`);

        // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", "12345");

        // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
        xhr.send(JSON.stringify(book));
    };


  // Fungsi ini digunakan untuk mengubah data buku yang ada pada buku melalui Web API.
    const updateBook = (book) => {
      // Membuat instance dari XMLHttpRequest
      const xhr = new XMLHttpRequest();

      // Menetapkan callback jika response sukses dan error
      xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText);
        showResponseMessage(responseJson.message);
        getBook();
      }

      xhr.onerror = function() {
        showResponseMessage();
      }

      // Membuat PUT request dan menetapkan target URL
      xhr.open("PUT", `${baseUrl}/edit/${book.id}`);

      // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-Auth-Token", "12345");

      // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
      xhr.send(JSON.stringify(book));
  };


// Fungsi ini digunakan untuk menghapus data buku yang ada melalui Web API.
    const removeBook = (bookId) => {
      // Membuat instance dari XMLHttpRequest
      const xhr = new XMLHttpRequest();

      // Menetapkan callback jika response sukses dan error
      xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText);
        showResponseMessage(responseJson.message);
        getBook();
      }

      xhr.onerror = function() {
        showResponseMessage();
      }

      // Membuat Delete request dan menetapkan target URL
     xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);

      // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-Auth-Token", "12345");

      // Mengirimkan request
      xhr.send();
    };






    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;
