var menu=document.querySelector('.menu');

window.onscroll=function(){myScroll()};
function myScroll(){
  if(window.pageYOffset <= 50){
      menu.style.height="70px";
    menu.style.background="none";
    menu.style.opacity="1";
  }else if(window.pageYOffset>50){
    menu.style.height="50px";
    menu.style.opacity="0.9";
    menu.style.background="black";
  }
}

