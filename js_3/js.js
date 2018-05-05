var menu=document.querySelector(".menu");
var navbar=document.querySelector(".navbar2");

var close=document.querySelector(".close");
menu.addEventListener('click',function(){
    navbar.style.top="0px";


});
close.addEventListener('click',function(){
    navbar.style.top="-210px";

});


