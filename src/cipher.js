window.cipher = {
    encode(offset, text) {  
        let result = "";
        
        for (let i=0; i<text.length; i++){
            let formula = ((asciiNum-65+offset)%26+65);
            result += String.fromCharCode(formula);

            if (asciiNum == 32){
                result += " ";
            }
            
        }
        
       return result;
    }, 
    decode(offset, text) {
        let result = "";

        for (let i=0; i<text.length; i++){
            
            let formulaDecode = ((asciiNum-90-parseInt(offset))%26+90);
            result += String.fromCharCode(formulaDecode);   

            if (asciiNum == 32){
                result += " ";
            }
        }
        return result;
    } 
}


/* window.cipher = {
    encode(offset, text) {  
        let result = "";

        for (let i=0; i<text.length; i++){
            let formula = ((text.charCodeAt(i)-65+ offset)%26+65);
            result += String.fromCharCode(formula);
            if (text.charCodeAt(i) === 32){
                result += String.fromCharCode(32);
            }
        }
        
       return result;
    },
    decode(offset, text) {
        let result = "";

        for (let i=0; i<text.length; i++){
            let formulaDecode = ((text.charCodeAt(i)-90-parseInt(offset))%26+90);
            result += String.fromCharCode(formulaDecode);   
            if (text.charCodeAt(i) === 32){
                result+= String.fromCharCode(32);
            }
        }
        return result;
    } 
} */