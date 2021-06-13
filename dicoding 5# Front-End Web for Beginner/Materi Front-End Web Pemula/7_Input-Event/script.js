/*
# Event onInput
	Event onInput akan dijalankan setiap kali kita menulis atau menghapus apa pun pada sebuah field input yang memiliki event listener tersebut.
*/

document.addEventListener('DOMContentLoaded', function (){
    const inputMaxLengthOnLoad = document.getElementById("inputNamaPanggilan").maxLength;
    document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;
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

})