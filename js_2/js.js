var user =document.getElementById("username");
var pass=document.querySelector("#password");
var pass_cf=document.querySelector("#password_comfirm");
var error=document.querySelector("#err")

var btn=document.querySelector("#submit")

btn.addEventListener('click',function(e){
   var  err=[]
     e.preventDefault();
    if(user.value==""){
       
        err.push("username null")
        
    }
    if(pass.value==""){
        err.push("password null")

    }
    else if(pass.value != pass_cf.value){
        err.push("password comfirm faild")

    }   
    console.log(err);
    var er="";
    for (let i = 0; i <= err.length-1; i++) {
        
        
      er+='<li>'+err[i]+'</li>';
    }
    error.innerHTML=er;
    
})

