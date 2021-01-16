const icon = document.getElementById("toggler");
const nav = document.getElementById("navbar");
//functions
const showNav = (e) => {
  e.target.classList.toggle("clicked");
  e.target.classList.contains("clicked")
    ? (nav.style.transform = "translateY(0)")
    : (nav.style.transform = "translateY(-100%)");
};
icon.addEventListener("click", showNav);
