function ejecutar() {
	// body...

	document.getElementsByTagName('img')[0].onclick=mostrar;
	document.getElementsByTagName('img')[1].onclick=mostrar;
	document.getElementsByTagName('img')[2].onclick=mostrar;


}

function mostrar(){

	alert('Texto imagen');

}

window.onload=ejecutar;