var get_data=document.querySelector('#get_data');
var show_data=document.querySelector('.data');
var h3=document.querySelector('.container>h3');
get_data.addEventListener('input',get);
 function get(){
     let data=get_data.value.toUpperCase();
    console.log(data);
    
     let xhr =new XMLHttpRequest();
     xhr.open('GET','data.json');

     xhr.onload=function(){
        if(this.status==200){
            h3.style.display="block";
            var dt=JSON.parse(this.responseText);
            var people=dt.people;
            var output='';
            for(i=0;i<people.length;i++){
                if(people[i].name.toUpperCase().indexOf(data)>0){
                    output+='<li>'+people[i].name+'</li>';
                }
              
            }
            if(output.length>0){
                show_data.innerHTML=output;
            }
            else{
                show_data.innerHTML="username not find";
            }
        
        }
       
     }
     xhr.send();
 }