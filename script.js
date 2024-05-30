let uniqueId=0;
function myname(){
    uniqueId++
    let inputField=document.querySelector(".task").value;
    let textList=document.querySelector('#mylists')
    let deleteBtn=document.createElement('button')
    deleteBtn.innerHTML="delete"
    let newList=document.createElement("p")
    newList.innerHTML=inputField
    newList.id='p-'+uniqueId
    deleteBtn.onclick=function(){
        newList.remove()
    }
    newList.appendChild(deleteBtn)
    textList.appendChild(newList)
    
}

let btn=document.querySelector('.btn').addEventListener('click',myname)