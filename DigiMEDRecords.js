
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

const downloadLink = document.querySelector('.download-link');
const passwordPopup = document.getElementById('password-popup');
const passwordForm = document.getElementById('password-form');

downloadLink.addEventListener('click', function(event) {
  event.preventDefault();
  passwordPopup.style.display = 'block';
});

passwordForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;
  // Replace "correct-password" with the actual password
  if (password === "900912") {
    const downloadLinkHref = downloadLink.getAttribute('href');
    window.open(downloadLinkHref, '_blank');
    passwordPopup.style.display = 'none';
  } else {
    const errorElement = document.createElement('p');
    errorElement.innerHTML = 'Incorrect password. Please try again.';
    passwordForm.appendChild(errorElement);
  }
});


