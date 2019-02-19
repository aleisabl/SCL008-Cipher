window.cipher = {
    encode(offset, text) {  
        let result = "";        

        for (let i=0; i<text.length; i++){
            const asciiNum = text.charCodeAt(i);

            let formula = ((asciiNum-65+offset)%26+65);
            result += String.fromCharCode(formula);            
        }
        
       return result;
    }, 
    decode(offset, text) {
        let result = "";

        for (let i=0; i<text.length; i++){
            const asciiNum = text.charCodeAt(i);

            let formulaDecode = ((asciiNum-90-parseInt(offset))%26+90);
            result += String.fromCharCode(formulaDecode);              
        }
        return result;
    } 
}
