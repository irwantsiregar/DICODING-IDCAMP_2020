/*
# Event onFocus
	=> Event ini akan terjadi jika sebuah elemen pada form dipilih untuk dilakukan proses input.
	Event onFocus akan dijalankan ketika melakukan klik di sebuah elemen input.

# Event onBlur
	=> Event ini akan terjadi jika sebuah elemen pada form tidak diplih lagi untuk dilakukan proses input.
Event onBlur akan dijalankan ketika pada kondisi yang terbalik dengan event onFocus, yakni jika kita “pergi” dari elemen yang memiliki event handler untuk event onFocus. Apa maksud dari “pergi”? Maksudnya adalah kita tidak lagi berinteraksi secara langsung dengan elemen tersebut, seperti kita telah melakukan klik pada elemen lain.
*/

document.addEventListener('DOMContentLoaded', function (){
    const inputMaxLengthOnLoad = document.getElementById("inputNamaPanggilan").maxLength;
    document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
});

document.getElementById('inputNamaPanggilan').addEventListener('input', function(){
	const jumlahKarakterDiKetik = document.getElementById('inputNamaPanggilan').value.length;
	const jumlahKarakterMaksimal = document.getElementById('inputNamaPanggilan').maxLength;
	
	console.log(jumlahKarakterDiKetik, jumlahKarakterMaksimal);

	const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiKetik;
	document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate;

	if (sisaKarakterUpdate == 0 ) {
		document.getElementById('sisaKarakter').innerText = 'Batas Maksimal Tercapai!';
	} else if(sisaKarakterUpdate <= 5) {
		document.getElementById('notifikasiSisaKarakter').style.color = 'red';
	} else {
		document.getElementById('notifikasiSisaKarakter').style.color = 'black';
	}

});

document.getElementById('inputNamaPanggilan').addEventListener('focus', function() {
	document.getElementById('notifikasiSisaKarakter').style.visibility = null;
});

document.getElementById('inputNamaPanggilan').addEventListener('blur', function() {
	document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
});