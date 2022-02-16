const inputDiv=document.querySelector(".inputDiv");
const input=document.querySelector("#input");
const button=document.getElementById("button");
const contentDiv=document.querySelector(".contentDiv");

var calculate=0;
button.addEventListener("click",go);
function go(){

    if(input.value != ""){
        calculate++;
    var text=document.createElement("p");
    var deletebutton=document.createElement("div");
    var finishButton=document.createElement("div");
    finishButton.classList.add("finishButton");
    deletebutton.classList.add("deletebutton");
    deletebutton.innerText="DELETE";
    finishButton.innerText="DONE";
    text.innerText= calculate + ")" + input.value;
    contentDiv.appendChild(text);
    
    text.appendChild(deletebutton)
    text.appendChild(finishButton);
    input.value=""
    deletebutton.addEventListener("click",function(){
        calculate--;
        contentDiv.removeChild(text);

    });
    finishButton.addEventListener("click",()=>{
        text.classList.toggle("deneme");
    })


}
}
