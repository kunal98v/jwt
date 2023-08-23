var name = document.querySelector("#name")
var email = document.querySelector("#email")
var pwd1 = document.querySelector("#pwdone")
var pwd2 = document.querySelector("#pwdtwo")
var btn = document.querySelector(".btn")
var popup = document.querySelector(".popup")



pwd2.addEventListener("change",(e)=>{

if((pwd1.value != "" )&& (pwd2.value != "")){

   if(pwd1.value === pwd2.value)
   {
        pwd1.classList.remove("red")
        pwd1.classList.add("green")
        pwd2.classList.remove("red")
        pwd2.classList.add("green")
        popup.innerHTML = ""

   }
        
   else{
          pwd2.classList.remove("green")
          pwd2.classList.add("red")
          pwd2.classList.remove("green")
          pwd2.classList.add("red")
          popup.innerHTML = "passwords do not match !"
   }
}
else{
     pwd1.classList.remove("red")
     pwd1.classList.remove("green")
     pwd2.classList.remove("red")
     pwd2.classList.remove("green")
}
})

pwd1.addEventListener("change",(e)=>{

     if((pwd1.value != "" )&& (pwd2.value != "")){
     if(pwd2.value === pwd1.value)
     {
          pwd1.classList.remove("red")
          pwd1.classList.add("green")
          pwd2.classList.remove("red")
          pwd2.classList.add("green")
          popup.innerHTML = ""

         
     }
     else{
            pwd2.classList.remove("green")
            pwd2.classList.add("red")
            pwd2.classList.remove("green")
            pwd2.classList.add("red")
            popup.innerHTML = "passwords do not match !"
   }
}
else{
     pwd1.classList.remove("red")
     pwd1.classList.remove("green")
     pwd2.classList.remove("red")
     pwd2.classList.remove("green")
}
  })
