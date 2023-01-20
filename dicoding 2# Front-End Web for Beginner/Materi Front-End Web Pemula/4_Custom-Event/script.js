// Reference : https://javascript.info/dispatch-events

const changeCaption = new Event('changeCaption', {
      bubbles: true
    });

function customEventHandler(ev) {
	console.log(`Event ${ev.type} telah dijalankan`);
	const caption = document.getElementById('caption');
	caption.innerText = 'Anda telah membangkitkan Event Custom';
}

window.addEventListener('load', function() {
	const tombol = document.getElementById('tombol');

	tombol.addEventListener('changeCaption', customEventHandler);

	tombol.addEventListener('click', function() {
		tombol.dispatchEvent(changeCaption);
	});

});