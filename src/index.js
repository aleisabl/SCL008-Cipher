// addEventListener para que el usuario no pueda escribir en el input y utilice sólo las flechas :p 

window.onload = () => {
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }
   //addEventListener botón cifrado , pasa variables, retorna resultado del cipher.encode llamando al btn por su ID

    document.getElementById("btnEncode").addEventListener("click", () => {
      let text = document.getElementById('message').value.toUpperCase();
      let offset = parseInt(document.getElementById('offsetNumber').value);
    document.getElementById("showEncode").innerHTML = `Mensaje ocultado: ${window.cipher.encode(offset, text)}`;  

    });

       //addEventListener botón desccifrado , pasa variables, retorna resultado del cipher.decode llamando al btn por su ID

    document.getElementById("btnDecode").addEventListener("click", () => {
      let text = document.getElementById('message').value.toUpperCase();
      let offset = parseInt(document.getElementById('offsetNumber').value);
    document.getElementById("showDecode").innerHTML = `Mensaje ocultado: ${window.cipher.decode(offset, text)}`;  

    });

    





/* 
showAlert () {
  if(document.getElementById("message").value.length == 0){
    alert("Por favor ingresar mensaje a revelar");
  } else if(document.getElementById("offsetNumber").value == ""){
      alert("Por favor ingresar el número favorito de tu amiga");
} */