// add event listener para que el usuario no pueda escribir en el input y utilice sólo las flechas :p 

window.onload = () => {
    const mouseOnly = document.getElementById("offsetNumber");
    mouseOnly.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }

window.encode = {
  captureValues () {
    let text = document.getElementById('message').value.toUpperCase();
    let offset = parseInt(document.getElementById('offsetNumber').value);
    window.cipher.encode(offset, text)
  },
  showValues () {
    document.getElementById("showEncode").innerHTML = `Mensaje ocultado: ${window.encode.result}`;  
  },
  showAlert () {
    if(document.getElementById("message").value.length == 0){
      alert("Por favor ingresar mensaje a ocultar");
  } else if(document.getElementById("offsetNumber").value == ""){
    alert("Por favor ingresar tu número favorito");
}
},
  result: ""
}


window.decode = {
  captureValues() {
    let text = document.getElementById('message').value.toUpperCase();
    let offset = parseInt(document.getElementById('offsetNumber').value);
    window.cipher.decode(offset, text)
  },
  showValues() {
    document.getElementById("showDecode").innerHTML = `Mensaje revelado: ${window.decode.result}`;   
  },
  showAlert () {
    if(document.getElementById("message").value.length == 0){
      alert("Por favor ingresar mensaje a revelar");
    } else if(document.getElementById("offsetNumber").value == ""){
        alert("Por favor ingresar el número favorito de tu amiga");
}
}, 
  result: ""
}
  