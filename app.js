const inputDiv=document.querySelector(".inputDiv");
const input=document.getElementById("input");
const button=document.getElementById("button");
const contentDiv=document.querySelector(".contentDiv");

button.addEventListener("click",go);
var calculate=0;

input.addEventListener("keyup",function(e){
  if(e.keyCode == 13){
    go();
  }
})

function go(){
    
  if(input.value !=""){
      calculate++;
    var text=document.createElement("p");
    var deleteButton=document.createElement("div");
    var finishButton=document.createElement("div")
    finishButton.classList.add("finishButton");
    deleteButton.classList.add("deleteButton");
    finishButton.innerText="DONE"

    deleteButton.innerText="DELETE"
    text.innerText=calculate + ")"+ input.value;
    contentDiv.appendChild(text);
    text.appendChild(deleteButton)
    text.appendChild(finishButton);
    input.value=""

    deleteButton.addEventListener("click",()=>{
        calculate--;
        contentDiv.removeChild(text)
    })
    finishButton.addEventListener("click",function(){
      text.classList.toggle("deneme")
    })
  }}