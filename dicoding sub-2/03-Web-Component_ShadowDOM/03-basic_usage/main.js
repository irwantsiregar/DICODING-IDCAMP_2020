// Shadow host
const divElement = document.createElement("div");

// Elemen yang berada di dalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";

// Melampirkan shadow roor pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({mode : "open"});

// Memasukkan elemen heading kedalam shadow shadowRoot
shadowRoot.appendChild(headingElement);

// Memasukkan elemen shadow host ke regulem DOM
document.body.appendChild(divElement);

// Menetapkan styling pada shadow DOM
shadowRoot.innerHTML += `
	<style>
		h1 {
			color : green;
		}
	</style>
	`;