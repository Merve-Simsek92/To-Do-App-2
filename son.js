
let check1=document.querySelector("#bir");
let check2=document.querySelector("#iki");
let check3=document.querySelector("#üç");
let check4=document.querySelector("#dört");
let check5=document.querySelector("#beş");
let check6=document.querySelector("#altı");

const result=document.querySelector(".result");

let span1=document.querySelector(".bir");
 let span2=document.querySelector(".iki");
let span3=document.querySelector(".üç");
let span4=document.querySelector(".dört");
 let span5=document.querySelector(".beş");
 let span6=document.querySelector(".altı");
count=0;
let checkList = document.querySelectorAll("input[type=checkbox]");
// checkbox=[check1,check2,check3,check4,check5,check6]
// let spanbox=[span1,span2,span3,span4,span5,span6]
checkList.forEach((item)=>{
    item.addEventListener("change", (e)=>{
        count++;
        console.log(item.parentElement.querySelector("span"));
        if (item.checked == true) {
            item.parentElement.querySelector("span").classList.toggle("deneme");
        }
        else{
            item.parentElement.querySelector("span").classList.remove("deneme");
        }
     result.innerText=`${count} OUT OF 6 TASKS COMPLETED`
    })
})


//checkbox=[check1,check2,check3,check4,check5,check6]
// spanbox=[span1,span2,span3,span4,span5,span6]


// for(let i=0;i<checkbox.length;i++){

// var self=checkbox[i];

// self.addEventListener("click",()=>{
//     span1.classList.toogle("deneme");
    

// },false)

// }


// check1.addEventListener("click",()=>{
//     span1.classList.toggle("deneme");
// check1.style.display="none"
// span1.innerHTML =  "\u00D7"+span1.innerHTML


// })

// check2.addEventListener("click",()=>{
//     span2.classList.toggle("deneme");
// check2.style.display="none"
// span2.innerHTML =  "\u00D7"+span2.innerHTML


// })

// check3.addEventListener("click",()=>{
//     span3.classList.toggle("deneme");
// check3.style.display="none"
// span3.innerHTML =  "\u00D7"+span3.innerHTML


// })

// check1.addEventListener("click",()=>{
//     span1.classList.toggle("deneme");
// check1.style.display="none"
// span1.innerHTML =  "\u00D7"+span1.innerHTML


// })