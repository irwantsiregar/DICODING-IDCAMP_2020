/*
# Event onCopy dan OnPaste.
	=> Event onCopy tergolong dalam kelompok clipboard events.
	Event ini terjadi jika kita melakukan operasi pada clipboard seperti copy, cut, dan paste.
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

document.getElementById('inputCaptcha').addEventListener('change', function(){
	const inputCaptcha = document.getElementById('inputCaptcha').value;
	const submitButtonStatus = document.getElementById('submitButton');

	if (inputCaptcha == 'PRNU') {
		submitButtonStatus.removeAttribute('disabled');
	}
});

document.getElementById('formDataDiri').addEventListener('submit', function(){
	const inputCaptcha = document.getElementById('inputCaptcha').value;

	if (inputCaptcha == 'PRNU') {
		event.preventDefault();
		alert('Selamat! Captcha Anda Lolos :v');
	} else {
		alert('Captcha Anda belum tepat :(');
		submitButtonStatus.addAttribute('disabled', true);
	}
});

document.getElementById('inputCopy').addEventListener('copy', function(){
	alert('Anda telah meng-copy sesuatu...');
});

document.getElementById('inputPaste').addEventListener('paste', function(){
	alert('Anda telah meng-paste sebuah teks...');
});