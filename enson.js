var checkList = document.querySelector("input[type=checkbox]");
checkList.addEventListener("click",function(ev){
    if(ev.target.tagName==="INPUT"){
        ev.target.classList.toggle("checked");
    }
},false);
