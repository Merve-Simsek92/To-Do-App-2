let myInput=document.querySelector("#myInput");
let button=document.querySelector(".addBtn");
let myresult=document.querySelector(".result");


button.addEventListener("click",go);
calculate=0

function go() {
    calculate++;
    if(myInput.value !=0){
        var text=document.createElement("p");
        
        var deletebutton=document.createElement("div");
        var finishButton=document.createElement("div")
        deletebutton.classList.add("deletebutton"),
        finishButton.classList.add("finishbutton")
        deletebutton.innerText="DELETE"
        
        text.innerText=calculate + ")"+ myInput.value;
        finishButton.innerText="DONE"
        myresult.appendChild(text);
        text.appendChild(deletebutton)
        text.appendChild(finishButton)

    myInput.value=""
     finishButton.addEventListener("click",()=>{
         text.classList.toggle("deneme");
     })



        deletebutton.addEventListener("click",()=>{
            myresult.removeChild(text)
            calculate--;

        })
    }
    
}