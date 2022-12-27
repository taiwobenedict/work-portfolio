const navBar = document.querySelector(".navbar");
const toggler = document.querySelector(".toggler");
const navBarNav = document.querySelector(".navbar ul");

AOS.init({
  duration: 1000,
});


$("nav a").on("click", scroll);
$("#banner a").on("click", scroll);

function scroll(e) {
   e.preventDefault();

   const href = $(this).attr("href");

   $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
}
window.addEventListener("scroll", function (e) {
  if (Number(e.target.body.scrollTop) >= 100) {
    navBar.classList.add("show-navbar-bg");
  } else navBar.classList.remove("show-navbar-bg");
});

toggler.addEventListener("click", function (e) {
  toggler.classList.toggle("turn-toggler");
  if (Number(document.body.scrollTop) < 100) {
    navBar.classList.add("show-navbar-bg");
  }
});

if (Number(document.body.scrollTop) >= 100) {
  navBar.classList.add("show-navbar-bg");
} else navBar.classList.remove("show-navbar-bg");
