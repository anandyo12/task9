let hamburgerIsOpen = false;

function showHamburger() {
  let hamburgerNavContainer = document.getElementById("nav-container");

  if (hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  } else {
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  }
}
