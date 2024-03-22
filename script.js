// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
 console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const form =document.querySelector("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone  = document.getElementById("phone");
const message = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${Name.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "appalanaidusivvala548@gmail.com",
    Password : "8D42DBAD36A445FE8A6A1AB1C41BD61F317E",
    To : 'appalanaidusivvala548@gmail.com',
    From : "appalanaidusivvala548@gmail.com",
    Subject : "PORTFOLIO VISITOR",
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "SUCCESS!",
        text: "Message Sent Successfully!",
        icon: "success"
      });

    }
  }
);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
})