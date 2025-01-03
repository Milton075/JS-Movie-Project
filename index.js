function toggleSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "inline-block"; // Show the spinner

    // Simulate a loading process
    setTimeout(() => {
        window.location.href = "your-new-page.html"; // Redirect to another page
    }, 2000); // This simulates a loading time of 2 seconds
}

function openMenu() {
	document.body.classList += " menu--open"
   }
   
   function closeMenu() {
	document.body.classList.remove('menu--open')
   }

   