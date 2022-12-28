const navBar = document.querySelector(".navbar");
const toggler = document.querySelector(".toggler");
const navBarNav = document.querySelector(".navbar-collapse");

// Fade in effects
AOS.init({
  duration: 1000,
});

// Smooth scrolling
$("nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});


// toggler
toggler.onclick = function () {
  toggler.classList.toggle('turn-toggler')
  navBar.classList.add("show-navbar-bg");
}


// Onscroll effect
document.body.onscroll = function () {
  toggler.classList.remove('turn-toggler')
  navBarNav.classList.remove('show')
  if (document.body.scrollTop == 0) {
    navBar.classList.remove("show-navbar-bg");
  } else navBar.classList.add("show-navbar-bg");
}

