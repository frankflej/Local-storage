
const display=()=>{
    const myfile=document.getElementById('myfile').files
    document.getElementById('myimg').style.display='block'
    const reader=new FileReader();
    reader.readAsDataURL(myfile[0])
    reader.addEventListener('load',function(){
        document.getElementById('myimg').src=reader.result;
    });
   }
   

    document.getElementById('sub').addEventListener('click', function(e){
            let mysingle_view=[]; 
            let array_check=[];
            e.preventDefault();
            const myname=document.getElementById('myname').value;
            const mycomment=document.getElementById('mycomment').value;
            const myimg=document.getElementById('myimg').src;
            const myobj={
                name:`${myname}`,
                mycomment:`${mycomment}`,
                myimg:`${myimg}`
            }
            if(localStorage.getItem('array_info')){
            array_check=JSON.parse(localStorage.getItem('array_info'))
            if(array_check != ''){
                mysingle_view=array_check
            }
            }else{
                localStorage.setItem('array_info',JSON.stringify(mysingle_view))
            }
            
            mysingle_view.push(myobj)
            localStorage.setItem('array_info',JSON.stringify(mysingle_view));
            document.getElementById('myname').value='';
            document.getElementById('mycomment').value='';
            document.getElementById('myimg').value='';
            document.getElementById('myfile').value='';
            document.getElementById('myimg').style.display='none'
            
            
           })

