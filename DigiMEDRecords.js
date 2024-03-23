console.log("JavaScript file loaded.");

// Check if the subMenu element is correctly identified
let subMenu = document.getElementById("subMenu");
console.log("subMenu:", subMenu);

// Check if the toggleMenu function is defined and called
function toggleMenu() {
  console.log("toggleMenu function called.");
  if (subMenu) {
    subMenu.classList.toggle("open-menu");
  } else {
    console.error("subMenu element not found.");
  }
}

// Check if downloadLink is correctly identified
const downloadLink = document.querySelector('.download-link');
console.log("downloadLink:", downloadLink);

// Check if passwordPopup is correctly identified
const passwordPopup = document.getElementById('password-popup');
console.log("passwordPopup:", passwordPopup);

// Check if passwordForm is correctly identified
const passwordForm = document.getElementById('password-form');
console.log("passwordForm:", passwordForm);

// Check if downloadLink and passwordForm event listeners are correctly attached
if (downloadLink && passwordForm) {
  downloadLink.addEventListener('click', function(event) {
    console.log("Download link clicked.");
    event.preventDefault();
    if (passwordPopup) {
      passwordPopup.style.display = 'block';
    } else {
      console.error("passwordPopup element not found.");
    }
  });

  passwordForm.addEventListener('submit', function(event) {
    console.log("Password form submitted.");
    event.preventDefault();
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    // Replace "correct-password" with the actual password
    if (password === "900912") {
      const downloadLinkHref = downloadLink.getAttribute('href');
      window.open(downloadLinkHref, '_blank');
      if (passwordPopup) {
        passwordPopup.style.display = 'none';
      } else {
        console.error("passwordPopup element not found.");
      }
    } else {
      const errorElement = document.createElement('p');
      errorElement.innerHTML = 'Incorrect password. Please try again.';
      if (passwordForm) {
        passwordForm.appendChild(errorElement);
      } else {
        console.error("passwordForm element not found.");
      }
    }
  });
} else {
  console.error("downloadLink or passwordForm element not found.");
}
