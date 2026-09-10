let username = document.getElementById("username")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let cpass = document.getElementById("cpass")
let inUser = document.getElementById("inUser")
let inEmail = document.getElementById("inEmail")
let inPass = document.getElementById("inPass")
let inCpass = document.getElementById("inCpass")
// let btn = document.getElementsByClassName("btn") دي غلط عشان هتديني ليست
let btn = document.querySelector(".btn")

// btn.addEventListener("click" , function(){
//     let userlInput زي guessUser = username زي input (id).value.trim();
//     console.log(/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(userlInput))
//     if (!/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(userlInput)) {
//         inUser.style.display = "block";
//     }else{
//         inUser.style.display = "none";
//     }

//     let emailInput = email.value.trim();
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput)) {
//         inEmail.style.display = "block";
//     }else{
//         inEmail.style.display = "none";
//     }

//     let passInput = pass.value.trim();
//     if (!/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passInput)) {
//         inPass.style.display = "block";
//     }else{
//         inPass.style.display = "none";
//     }

//     let cpassInput = cpass.value.trim();
//     if (!validationP || cpassInput !== passInput) {
//         inCpass.style.display = "block";
//     }else{
//         inCpass.style.display = "none";
//     }
// })

let matchUser = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
let matchEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let matchPass = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

btn.addEventListener("click" , function(){
    let userInput = username.value.trim();
    let emailInput = email.value.trim();
    let passInput = pass.value.trim();
    let cpassInput = cpass.value.trim();

    if(emailInput === "" || userInput === "" || passInput === "" || cpassInput === ""){ //IMPORTANT
    alert("please fill up missing fields");
    inUser.style.display = "none";
    inEmail.style.display = "none";
    inPass.style.display = "none";
    inCpass.style.display = "none";
    return
    }

    let validationU = matchUser.test(userInput) // /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(userInput)
    console.log(validationU)
    //inUser.style.display = validationU ? "none" : "block";
    if(!validationU){
        inUser.style.display = "block";
    }else{
        inUser.style.display = "none";
    }

    // let userInput = username.value.trim()
    // console.log(matchUser.test(userInput))
    // if(!matchUser.test(userInput)){
    //     inUser.style.display = "block";
    // }else{
    //     inUser.style.display = "none";
    // }

    let validationE = matchEmail.test(emailInput) ///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput)
    console.log(validationE)
    //inEmail.style.display = validationE ? "none" : "block";
    if(!validationE){
        inEmail.style.display = "block";
    }else{
        inEmail.style.display = "none";
    }

    let validationP = matchPass.test(passInput) // /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passInput)
    console.log(validationP)
    //inPass.style.display = validationP ? "none" : "block";
    if(!validationP){
        inPass.style.display = "block";
    }else{
        inPass.style.display = "none";
    }

    if(!validationP || cpassInput !== passInput){ //مهمتها بس تتأكد انها شبه الباس
        inCpass.style.display = "block";
    }else{
        inCpass.style.display = "none";
    }

    if(validationU && validationE && validationP && cpassInput === passInput){
        let userData = {
        username: userInput,
        email: emailInput,
        password: passInput
        }

        localStorage.setItem("user" , JSON.stringify(userData))

        alert("User created successfully")
        window.location.href = "./login.html"
    }
})
