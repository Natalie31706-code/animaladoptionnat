let user = document.getElementById("user");

let storedData = localStorage.getItem("user");
let userData = JSON.parse(storedData);

user.textContent = userData.username; 

