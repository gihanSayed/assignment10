var sNameInput=document.getElementById("Site Name");
var sUrlInput=document.getElementById("Site URL");

arr=[];



if(localStorage.getItem("Products") !=null){
    arr=JSON.parse(localStorage.getItem("Products"))
    display() 
}


function addbookmark()
{
if(validation()==true){

    var input={
        sName:sNameInput.value,
        sUrl:sUrlInput.value,
     }
     arr.push(input);
    
     localStorage.setItem("Products" ,  JSON.stringify(arr)  )
    
     display();
     sClear(); 
}else{
     alert("Site name must contain at least 3 characters / Site URL must be a valid one")
}

}

function sClear()
{
    sNameInput.value="";
    sUrlInput.value="";
}

function display()
{
var cartoona ='';
for(var i=0;i<arr.length;i++){
    cartoona+=`
    <tr>
    <td>${i}</td>
    <td>${arr[i].sName}</td>
    <td>
   <a href="${arr[i].sUrl}"  target="_blank"><button class="btn btn-danger"><i class="fa-regular fa-eye"></i> Visit</button></a>
    </td>
    <td>
    <button onclick="sDelete(${i})" class="btn btn-success"><i class="fa-solid fa-trash-can"></i> Delete</button>
</td>
    
    </tr>
    `
    console.log(cartoona)
document.getElementById("tbody").innerHTML=cartoona;
}
}




function sDelete(term)
{
arr.splice(term , 1)
localStorage.setItem("Products" ,  JSON.stringify(arr)  )
display();
}


function validation()
{

    var regex= /^[a-zA-Z]{3,}$/;
    var regeex=/^(http|https):\/\/www\.[a-zA-Z0-9]*\.com/;
    if(regex.test(sNameInput.value)==true&&regeex.test(sUrlInput.value)==true){
        return true;
    }else{
        return false;
    }
}
