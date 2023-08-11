let man = [
  {
    image: "img/product-1.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-2.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-3.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-4.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-5.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-6.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-7.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
  {
    image: "img/product-8.jpg",
    name: "Lorem ipsum plant two",
    icons:'<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
    price: "$9.54",
    btn1: "ADD TO CART"
  },
];

man.map((ele) => {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "div1");
  let div2 = document.createElement("div");
  div2.setAttribute("class", "div2");
  let img = document.createElement("img");
  img.src = ele.image;
  let name = document.createElement("p");
  name.innerHTML = ele.name;
  let icons = document.createElement("h2");
  icons.innerHTML = ele.icons;
  let price = document.createElement("h3");
  price.innerHTML = ele.price;
  let btn1 = document.createElement("button");
  btn1.innerHTML = ele.btn1;
  div2.append(img,name,icons, price, btn1);
  document.getElementById("men1").append(div1);
  document.getElementById("men2").append(div2);
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



// counter JS
var countDownDate = new Date("oct 16 , 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

