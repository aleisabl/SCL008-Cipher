window.cipher = {
  encode: () => {
      let resultEncode = "";
      let text = document.getElementById('message').value.toUpperCase();
      let offset = document.getElementById('offsetNumber').value;
      
      for (let i=0; i<text.length; i++){
          let formula = ((text.charCodeAt(i)-65+ parseInt(offset))%26+65);
          resultEncode += String.fromCharCode(formula);
          
      }
      if(document.getElementById("message").value.length == 0){
          alert("Por favor rellenar todos los campos");
      }
      document.getElementById("showEncode").innerHTML = `Mensaje ocultado: ${resultEncode}`;
  },

  decode: () => {
      let resultDecode = "";
      let textDecode = document.getElementById('message').value.toUpperCase();
      let offset = document.getElementById('offsetNumber').value;
  
      for (let i=0; i<textDecode.length; i++){
  
          let formulaDecode = ((textDecode.charCodeAt(i)-90- parseInt(offset))%26+90);
          resultDecode += String.fromCharCode(formulaDecode);   
      }
      if(document.getElementById("message").value.length == 0){
          alert("Por favor rellenar todos los campos");
      }
      document.getElementById("showDecode").innerHTML = `Mensaje revelado: ${resultDecode}`;
  }
};
