/*
# Practice : Promise
Selamat! Sejauh ini Anda sudah mengetahui bagaimana cara membuat Promise pada JavaScript. Nah, seperti biasa. Sekarang saatnya kita terapkan apa yang sudah kita dapatkan pada project Club Finder.

Pada project Club Finder lebih tepatnya pada class DataSource, kita masih menggunakan callback untuk mendapatkan nilai club berdasarkan keyword pengguna. 
*/

class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }
 
    searchClub(keyword) {
        const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
 
        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        } else {
            this.onFailed(`${keyword} is not found"`);
        }
    }
}

/*
Karena Anda sudah belajar mengenai Promise pada JavaScript. Seharusnya kita dapat memanfaatkannya.
Sehingga kita tidak membutuhkan callback onSuccess, dan onFailed lagi. Karena fungsi kedua
callback tersebut dapat digantikan dengan penggunaan resolve dan reject pada promise.

Tugas Anda sekarang adalah untuk mengubah penerapan callback function dengan menggunakan
Promise. 

Good luck ya!
*/