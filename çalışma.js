checklist=document.getElementsByTagName("input");
spanbox=document.getElementsByTagName("span");
spanlist=Array.from(spanbox)
console.log(spanlist[0].innerText);

   

console.log(Array.from(checklist));
Array.from(checklist).forEach((item)=>{
  item.addEventListener("change",()=>{
    if(item.checked==true){
        
        item.style.display="none"
        
    spanlist[Array.from(checklist).indexOf(item)].innerText =  spanlist[Array.from(checklist).indexOf(item)].classList.toggle("deneme");
    }
  })
})

