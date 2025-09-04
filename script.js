const inputBorder=document.querySelector(".inside-container")
const display=document.querySelector("input")
const click=document.querySelector("img")
const strength=document.querySelector("span")
const password=document.querySelector("p")
const show=document.querySelector("#btn")

show.addEventListener("click",()=>{
    if(display.type==="password"){
        display.type="text";
        show.innerText="Hide";
    }
    else{
        display.type="password";
        show.innerText="Show";
    }
})

display.addEventListener('input',()=>{
    if(display.value.length>0){
        password.style.display="block";
        strength.innerText="Weak";
        inputBorder.style.borderColor="red";
        password.style.color="red";
    }
    else{
        password.style.display="none";
        inputBorder.style.borderColor="black";
    }
    if(display.value.length>4 && display.value.length<=8){
        password.style.display="block";
        inputBorder.style.borderColor="yellow";
        strength.innerText="Medium";
        password.style.color="yellow";
    }
    if(display.value.length>8){
        password.style.display="block";
        inputBorder.style.borderColor="rgb(49, 165, 49)";
        password.style.color="rgb(49, 165, 49)";
        strength.innerText="Strong";
    }
})