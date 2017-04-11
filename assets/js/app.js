var ittem=[];

for(var i=1;i<13;i++){
  var blockImage= document.getElementById("work-box"); //
  var div= document.createElement("div");
  var img= document.createElement("img");
  var span= document.createElement("span");
  img.setAttribute("src","assets/image/img-"+ i +".jpg");
  span.innerHTML=i;
  img.setAttribute("class","modal");
  div.setAttribute("class","div-modal")
  div.appendChild(img);
  div.appendChild(span);
  blockImage.appendChild(div);
}

var modal= document.getElementsByClassName("div-modal");

modal.addEventListener("click",funtion(event){
  var img=document.getElementsByClassName("modal");
  var close= document.createElement(Span);
  close.setAttribute("id","cerrar");

  close.innerHTML="X";
  modal.style.display = "block";
  for(var i=1;i<13;i++){
  img[i].src=this.src;
}
})
var close= document.createElement(Span);

close.addEventListener("click",funtion(){
  modal.style.display = "none";
})
