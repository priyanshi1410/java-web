document.getElementById("sign-up").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");

    let user = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        cpassword: document.getElementById("cpassword").value
    }

    localStorage.setItem("sign", JSON.stringify(user));
    console.log(user);

    const email = emailInput.value;

    if (localStorage.getItem(email)) {
        alert("You are already registered and logged in.");
    } else {
        localStorage.setItem(email, "registered");
        alert("Registration successful!");
        window.location.href = "sign in.html";
    }
})

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
