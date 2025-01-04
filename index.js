function toggleSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "inline-block"; // Show the spinner
}

function openMenu() {
	document.body.classList += " menu--open"
   }
function closeMenu() {
	document.body.classList.remove('menu--open')
   }

   // JavaScript
document.getElementById('not_loading').addEventListener('click', function() {
  // Show the loading modal
  document.getElementById('modal__overlay--loading').style.display = 'block';
});

const iconContainer = document.querySelector('.icon-container');
const boxIcon = document.querySelector('.nav__icon');
const xSign = document.querySelector('.fa-x');

iconContainer.addEventListener('click', () => {
  if (boxIcon.style.opacity === '1') {
    boxIcon.style.opacity = '0';
    xSign.style.opacity = '1';
    xSign.style.visibility = 'visible';
    xSign.style.transform = 'rotate(0deg)'; 
  } else {
    boxIcon.style.opacity = '1';
    xSign.style.opacity = '0';
    xSign.style.visibility = 'hidden';
    xSign.style.transform = 'rotate(90deg)'; 
  }
});