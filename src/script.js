let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");

let contador = 0;
document.getElementById("radio0").checked= true;

setInterval ( function(){
    proxImg();
},6000)

function proxImg(){
    contador++;
    if(contador>3){
        contador = 0;
    }
    document.getElementById("radio"+contador).checked= true;
}

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

function openPopup2(){
    popup2.classList.add("open-popup");
}
function closePopup2(){
    popup2.classList.remove("open-popup");
}
