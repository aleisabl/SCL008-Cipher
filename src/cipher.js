
window.cipher = {
    encode(offset, text) {  
        for (let i=0; i<text.length; i++){
            let formula = ((text.charCodeAt(i)-65+ offset)%26+65);
            window.encode.result += String.fromCharCode(formula);
        }
  
       window.encode.showValues()
       window.encode.showAlert()
    },
    decode(offset, textDecode) {
        for (let i=0; i<textDecode.length; i++){
            let formulaDecode = ((textDecode.charCodeAt(i)-90- parseInt(offset))%26+90);
            window.decode.result += String.fromCharCode(formulaDecode);   
        }
        window.decode.showValues()
        window.decode.showAlert()
    } 
}


