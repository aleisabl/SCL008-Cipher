/* add event listener para que el usuario no pueda colocar cualquier número en el input
    y utilice sólo las flechas */


    //window objeto global

window.onload = () => {
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }
/* window.captureValuesEncode = () => {
  let text = document.getElementById('message').value.toUpperCase();
  let offset = parseInt(document.getElementById('offsetNumber').value);
  window.cipher.encode(offset, text)
} */
window.encode = {
  captureValues () {
    let text = document.getElementById('message').value.toUpperCase();
    let offset = parseInt(document.getElementById('offsetNumber').value);
    window.cipher.encode(offset, text)
  },
  showValues () {
    document.getElementById("showEncode").innerHTML = `Mensaje ocultado: ${window.encode.result}`;  
  },
  result: ""
}
window.decode = {
  captureValues() {
    let text = document.getElementById('message').value.toUpperCase();
    let offset = document.getElementById('offsetNumber').value;
    window.cipher.decode(offset, text)
  },
  showValues() {
    document.getElementById("showDecode").innerHTML = `Mensaje ocultado: ${window.decode.result}`;   
  },
  result: ""
}
  /*  if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
        } */

        /* if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
        } */