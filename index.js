
//const API_URL = 'https://www.omdbapi.com/?apikey=a06bdca6&s='; 

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=a06bdca6&s=fast");
    const moviesData = await movies.json();
    const movieListEl = document.querySelector('.movies');
    console.log(moviesData);
    movieListEl.innerHTML = moviesData.Search
    .map(
        (movie) =>  
    `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img--search" src="" alt="">
    </figure>
    <div class="movie__content">
        <h3>${movie.Title}:</h3>
        <p>${movie.Year}:</p>
        <p>${movie.Type}:</p>
    </div>`
    )
    .join("");

}

main();


function openMenu() {
	document.body.classList += " menu--open"
   }
function closeMenu() {
	document.body.classList.remove('menu--open')
   }

   document.addEventListener('DOMContentLoaded', () => {
    
    const searchButtons = document.querySelectorAll('.not__loading');
    console.log(searchButtons);

    searchButtons.forEach(button => { 
        button.addEventListener('click', function() {
            // Change button class to indicate loading
            this.classList.remove('not__loading'); // Remove the not loading class
            this.classList.add('loading'); // Add a loading class

            // Show the spinner
            const spinner = this.querySelector('.modal__overlay');
            spinner.classList.add('modal__overlay'); // Show the spinner

      // Simulate loading time
            setTimeout(() => {
               //  After loading, you can reset the button if needed
                this.classList.add('not__loading'); // Reset the button class
                this.classList.remove('loading'); // Remove loading class
                spinner.classList.remove('modal__overlay'); // Hide the spinner
            }, 300); // Simulate a 1-second loading time
        });
    });
});
//const iconContainer = document.querySelector('.icon-container');
//const boxIcon = document.querySelector('.nav__icon');
//const xSign = document.querySelector('.fa-x');

//iconContainer.addEventListener('click', () => {
//  if (boxIcon.style.opacity === '1') {
//    boxIcon.style.opacity = '0';
//    xSign.style.opacity = '1';
//    xSign.style.visibility = 'visible';
//    xSign.style.transform = 'rotate(0deg)'; 
//  } else {
//    boxIcon.style.opacity = '1';
//    xSign.style.opacity = '0';
//    xSign.style.visibility = 'hidden';
//    xSign.style.transform = 'rotate(90deg)'; 
//  }
//});