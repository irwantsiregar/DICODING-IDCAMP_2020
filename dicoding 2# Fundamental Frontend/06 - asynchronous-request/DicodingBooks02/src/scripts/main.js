function main() {
   // Base URL digunakan utk membuat nilai yang sama ketika variabel dipanggil
  const baseUrl = "https://web-server-book-dicoding.appspot.com";

  // Fungsi ini digunakan utk mendapatkan daftar buku yg ada pada Web API lalu menampilkan ke client
    const getBook = () => {
      // Membuat GET request(default), menetapkan target dan Mengirimkan request
      fetch(`${baseUrl}/list`)
      .then(response => {
        // menangani respon dari request yg dibuat
        return response.json();
      })
      .then(responseJson => {
        // jika response sukses dan error.
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllBooks(responseJson.books);
        }
      })
      .catch(error =>{
        // menangani flow ketika terjadi promise rejection baik pada fetch atau json().
        showResponseMessage(error);
      })

    };


// Fungsi ini digunakan untuk menambahkan data buku melalui Web API
    const insertBook = (book) => {
      // Membuat POST request, menetapkan target dan Mengirimkan request
      fetch(`${baseUrl}/add`, {
        // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "X-Auth-Token": "12345"
          },
        // Mengirimkan request dan menyisipkan JSON.stringify(book) pada Body
        body : JSON.stringify(book)
      })
      .then(response => {
        // menangani respon dari request yg dibuat
        return response.json();
      })
      .then(responseJson => {
        // jika response sukses dan error.
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch(error => {
        // menangani flow ketika terjadi promise rejection baik pada fetch atau json().
        showResponseMessage(error);
      })
    };


  // Fungsi ini digunakan untuk mengubah data buku yang ada pada buku melalui Web API.
    const updateBook = (book) => {
      // Membuat POST request, menetapkan target dan Mengirimkan request
       fetch(`${baseUrl}/edit/${book.id}`, {
        // Menetapkan properti Content-Type dan X-Auth-Token pada Header request
        method : "PUT",
        headers : {
            "Content-Type": "application/json",
            "X-Auth-Token": "12345"
          },
        // Mengirimkan request dan menyisipkan JSON.stringify(book) pada Body
        body : JSON.stringify(book)
      })
      .then(response => {
        // menangani respon dari request yg dibuat
        return response.json();
      })
      .then(responseJson => {
        // jika response sukses dan error.
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch(error => {
        // menangani flow ketika terjadi promise rejection baik pada fetch atau json().
        showResponseMessage(error);
      })
    };



// Fungsi ini digunakan untuk menghapus data buku yang ada melalui Web API.
    const removeBook = (bookId) => {
      // Membuat DELETE request, menetapkan target dan Mengirimkan request
       fetch(`${baseUrl}/delete/${bookId}`, {
        // Menetapkan properti X-Auth-Token pada Header request
        method : "DELETE",
        headers : {
            "X-Auth-Token": "12345"
          }
      })
      .then(response => {
        // menangani respon dari request yg dibuat
        return response.json();
      })
      .then(responseJson => {
        // jika response sukses dan error.
        showResponseMessage(responseJson.message);
        getBook();
      })
      .catch(error => {
        // menangani flow ketika terjadi promise rejection baik pada fetch atau json().
        showResponseMessage(error);
      })
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
