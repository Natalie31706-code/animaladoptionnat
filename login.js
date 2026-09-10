let email = document.getElementById("email")
let pass = document.getElementById("pass")
let inEmail = document.getElementById("inEmail")
let inPass = document.getElementById("inPass")
let btn = document.querySelector(".btn")
let data = document.getElementById("data")

btn.addEventListener("click" , function(){
    let emailInput = email.value.trim()
    let passInput = pass.value.trim()

    let storedData = localStorage.getItem("user")

    if(storedData){
        let userData = JSON.parse(storedData)

        if (emailInput === ""|| passInput ==="") {
            alert("please fill up missing fields")
            inEmail.style.display = "none"
            inPass.style.display = "none"
            return
        }
        
        if(emailInput === userData.email){
            inEmail.style.display = "none"
        }else{
            inEmail.style.display = "block"
        }

        if(passInput === userData.password){
            inPass.style.display = "none"
        }else{
            inPass.style.display = "block"
        }
  
        if(emailInput === userData.email && passInput === userData.password){
            alert("login is successful")
            window.location.href= "./assignment.html"
        }

    }else{
        data.style.display = "block"
    }
})