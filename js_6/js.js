var data=document.querySelector("#get_data")
var show_data=document.querySelector("#show_data")
var count=document.querySelector("#count_result");
//-------------Search with Ajax---------------
/*data.addEventListener('input',get_data_ajax);
function get_data_ajax(){
    let value_data=data.value.toUpperCase();
    console.log(value_data);
    
    var xhr= new XMLHttpRequest();
    xhr.open('GET','data.json');
    xhr.onload=function(){
        if(this.status==200 && value_data !=''){
            var dt=JSON.parse(this.responseText);
            var product=dt.product;
        
            var output='';
            var c_r=0;
            for(i=0;i<product.length;i++){
                if(product[i].name_product.toUpperCase().indexOf(value_data)>-1 || product[i].category.toUpperCase().indexOf(value_data)>-1 && value_data!='' ){
                    output+=`<div class="box_data">
                    <div class="box_content">
                        <h3>`+product[i].id_product+`</h3>
                        <h4>`+product[i].name_product+`</h4>
                        <h5>`+product[i].category+`</h5>
                        <p>`+product[i].price+`</p> 
                    </div>
                </div>`;
                c_r++;
                }   
            }
            if(output.length>0){
                show_data.innerHTML=output;
                count.innerHTML=`<p> Have `+c_r+` results</p>`;
            }else{
                show_data.innerHTML=output;
                count.innerHTML=`<p> Not find results</p>`;
            }
                
            
        }
    };
    xhr.send();
}
*/

//----------------Search with Fetch---------------
data.addEventListener('input',get_data_fetch);
function get_data_fetch(){
    let value_data=data.value.toUpperCase();

    fetch('data.json')
    .then(response=>{
        if(response.status != 200){
           count.innerHTML=`<p> Not find results</p>`;
            throw Error(response.statusText);
        }else{
            return response.json();
        }
    })
    .then(data=>{
        var c_r=0;
      let output='';
      let product=data.product;
      for(var i=0;i<product.length;i++){
        if(product[i].name_product.toUpperCase().indexOf(value_data)>-1||product[i].category.toUpperCase().indexOf(value_data)>-1 ){
            output+=`<div class="box_data">
            <div class="box_content">
                <h3>`+product[i].id_product+`</h3>
                <h4>`+product[i].name_product+`</h4>
                <h5>`+product[i].category+`</h5>
                <p>`+product[i].price+`</p> 
            </div>
        </div>`;
        c_r++;
        }
        
      }

      if(output.length>0){
          show_data.innerHTML=output;
          count.innerHTML=`<p> Have `+c_r+` results</p>`;
      }else{
        show_data.innerHTML='';
        count.innerHTML=`<p> Not find results</p>`;
      }
        
    })
    .catch(err=>console.log(err));
}