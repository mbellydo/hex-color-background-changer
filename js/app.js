// Tu código aquí
let button = document.querySelector('a')

button.onclick = eventClick

function generarLetra(){
	let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
function generarHex(){
    let colorHex = ""
	for(let i=0 ; i<6 ; i++){
	    colorHex = colorHex + generarLetra()
	}
	return "#" + colorHex
}

function eventClick(){
    let color = generarHex()
    let body = document.querySelector('body')

    body.style.backgroundColor = color
}

//<a href="#" id="btn" class="btn btn-secondary text-uppercase my-2">click me</a>