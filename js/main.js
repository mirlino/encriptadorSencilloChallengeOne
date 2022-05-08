'use strict'

let InputText = document.getElementById('text-input');
const infoWishoutImg = document.getElementById("blockOne");
const infoWithImg = document.getElementById("blockTwo");

let simpleText = "";
let text = "";

const Encrypt = function(e){

  const btnPressed = document.getElementById(e);
  
  btnPressed.addEventListener('click', function(){
    
    text = document.getElementById('encriptador').value.trim();

    if (e === 'btnEncrypt' && text.length >  0) {
      simpleText = text.replaceAll(/e/gm, "enter")
            .replaceAll(/i/gm, "imes")
            .replaceAll(/a/gm, "ai")
            .replaceAll(/o/gm, "ober")
            .replaceAll(/u/gm, "ufat");

      infoWishoutImg.classList.remove("hidden");
      infoWithImg.classList.add("hidden");

      InputText.value = simpleText;

    } else if(e === 'btnDecrypt' && text.length > 0){
      simpleText = text.replaceAll(/enter/gm, "e")
      .replaceAll(/imes/gm, "i")
      .replaceAll(/ai/gm, "a")
      .replaceAll(/ober/gm, "o")
      .replaceAll(/ufat/gm, "u");

      InputText.value = simpleText;
    } else {
      alert("Debe de ingresar un texto valido.");
    }
  });
}

const copyText = function(){
  let encriptado = document.getElementById('text-input');
  text = document.getElementById('encriptador');
  
  encriptado.select();
  if (document.execCommand('copy')) {
    alert("Texto satisfactoriamente copiado!");
  } else {
    alert("No fue posible copiar el texto");
  }
}