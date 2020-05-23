//Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

$("#contactForm").submit(function (e) {
  var name = document.getElementById("inputName");
  email = document.getElementById("inputEmail");
  phone = document.getElementById("inputPhone");
  subject = document.getElementById("inputSubject");
  message = document.getElementById("inputMessage");
  if (
    !name.value ||
    !email.value ||
    !message.value ||
    !phone.value ||
    !subject.value
  ) {
    alertify.error("Please check your entries");
  } else {
    $.ajax({
      method: "POST",
      url: "https://formspree.io/optimistic.leo2020@gmail.com",
      data: $(this).serialize(),
      datatype: "json",
    });
    e.preventDefault();
    $(this).get(0).reset();
    alertify.success("Message sent");
  }
});
