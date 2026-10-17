let users = ["Andy","Bryan","Guillaume"]
  
users.forEach((name) => {
    console.log(name)
})

const Neil_theme= document.getElementById("NEIL")
Neil_theme.addEventListener("click",doSomething)


function doSomething(){
   document.getElementById("ANDY").textContent= "Neil Djebali"

}

const cartesEtudiants = document.querySelectorAll('#grid-students .andy_red');
const input_user = document.getElementById("fname")
input_user.addEventListener('input',search)
const form_user= document.querySelector('form')
form_user.addEventListener("submit",user_submit)
function search(){
    cartesEtudiants.forEach((carte) => {
    if  (carte.querySelector(".name").textContent == input_user.value) {
            carte.style.display = "";
    }else{
        carte.style.display="none";
    }
      })
    console.log(input_user.value);
}

function user_submit(e){
    e.preventDefault();
}
    


