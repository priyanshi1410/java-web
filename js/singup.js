document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("sign"));

    console.log(user);

    let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   if(email == user.email && password == user.password){
    alert("log in");
    window.location.href="index.html";
   }
   else{
    alert("Invalid");
   }
});

// header 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}
