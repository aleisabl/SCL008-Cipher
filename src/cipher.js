window.cipher = {
    encode(offset, text) {  
        for (let i=0; i<text.length; i++){
            let formula = ((text.charCodeAt(i)-65+ offset)%26+65);
            window.encode.result += String.fromCharCode(formula);
        }
        if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
            
        } if (text == ' '){
            window.encode.result+= " ";
        }
  
       window.encode.showValues()
    },
    decode(offset, textDecode) {
        for (let i=0; i<textDecode.length; i++){
            let formulaDecode = ((textDecode.charCodeAt(i)-90- parseInt(offset))%26+90);
            window.decode.result += String.fromCharCode(formulaDecode);   
        }
        if(document.getElementById("message").value.length == 0){
            alert("Por favor rellenar todos los campos");
        }
        window.decode.showValues()
    } 
}


