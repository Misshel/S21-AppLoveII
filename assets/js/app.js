var ittem=[];

for(var i=1;i<13;i++){
  var blockImage= document.getElementById("work-box"); //
  var div= document.createElement("div");
  var img= document.createElement("img");
  var span= document.createElement("span");
  img.setAttribute("src","assets/image/img-"+ i +".jpg");
//  span.innerHTML=i;
  img.setAttribute("class","modal");
  //div.appendChild(img);
//  div.appendChild(span);
  blockImage.appendChild(img);
}

var modal=document.getElementsByClassName("modal");

modal.addEventListener("click",modalFuntion);

function modalFuntion(){

}
