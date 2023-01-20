const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding';

const google = document.getElementById('googleLink');
google.innerHTML = '<i>Mencari Sesuatu di Google</i>';

const buttons = document.getElementsByClassName('button');

for(let button of buttons){
    button.childNodes[0].style.borderRadius = "4px";
    button.childNodes[0].style.backgroundColor = "#ddd";
}