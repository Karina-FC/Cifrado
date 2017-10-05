
function validText (){
    var option = "";
    do{
    	var sentence = prompt ("Ingrese una frase: ");// Usuario ingresa frase
        if (/^[a-zA-Z\s]+$/.test(sentence)){ //validación de texto
			option = prompt ("Ingrese su opción: 1) Cifrar - 2) DesCifrar"); //Solicitar opción a usuario
			if (option == "1"){ //Si la opción es 1, la frase ingresada será cifrada
				return cipher (sentence);
			}else if (option == "2"){ //Si la opción es 2, la frase ingresada será descifrada
				return decipher (sentence);
			}else{
				alert("Ingrese una opción válida"); //Si opción es invalida, se solicita una nueva frase
			}
        }
    }while (option == "" || (option != "1" && option != "2"));
}

function cipher(text, shift=33){
    var retVal=""; // define variable donde concateno() los caracteres cifrados
    for (var i of text) {
        var c = i.charCodeAt(0)+shift-65; //Estable valor de la letra Aa=0, 
        retVal+= String.fromCharCode( (c%26)+65);
    }
    return ("Su Frase cifrada es: " + retVal);
}

function decipher(text, shift=33){
    var retVal="";
    for (var i of text) {
        var c= i.charCodeAt(0)-shift+65;
        retVal+= String.fromCharCode( (c%26)+65);
    }
    return ("Su Frase cifrada es: " + retVal);
}

validText();