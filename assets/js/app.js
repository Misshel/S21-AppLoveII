var ittem=["","TAIMAN","KERALA-GEL","THE BRASS COQ",
          "SUNGENRE-DISCO","MITRAGYNA SPECIOSA",
          "FOAM KINE","VOLITION","INK","GILKON",
        "OWLS & APPLES", "SHERWOOD","PLATINUM"];

for(var i=1;i<13;i++){
  var blockImage= document.getElementById("work-box"); //
  var div= document.createElement("div");
  var img= document.createElement("img");
  var span= document.createElement("span");
  img.setAttribute("src","assets/image/img-"+ i +".jpg");
  img.setAttribute("alt",ittem[i]);
  span.innerHTML=img.alt;
  img.setAttribute("class","modal-img");
  div.setAttribute("class","div-modal");
  div.appendChild(img);
  div.appendChild(span);
  blockImage.appendChild(div);
  }


var modal=document.getElementsByClassName("modal")[0];
var cerrar=document.getElementsByClassName("boton-cerrar")[0];
var boximg=document.getElementById("work-box");//contenedor de imagenes
var imagen=document.getElementById("imagen");//contenido del modal
    boximg.addEventListener('click',function (e) {
      if (e.target.tagName =="IMG"){
        modal.style.display="block";
        cerrar.style.display="inline-block";
        imagen.src=e.target.src;
      }
    });

cerrar.addEventListener("click",function(){
      cerrar.style.display="none";
      modal.style.display="none";
    });
