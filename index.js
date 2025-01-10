
const API_URL = 'https://www.omdbapi.com/?apikey=a06bdca6&s='; 

document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value;
    searchMovies(searchTerm);
});

async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
    const data = await response.json();
    displayMovies(data.Search);
}

function displayMovies(movies) {
    const moviesContainer = document.querySelector('.movies');
    moviesContainer.innerHTML = ''; // Clear previous results

    if (movies) {
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <figure class="movie__img--wrapper">
                    <img class="movie__img--search" src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                </figure>
                <div class="movie__content">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                </div>
            `;
            moviesContainer.appendChild(movieDiv);
        });
    } else {
        moviesContainer.innerHTML = '<p>No movies found.</p>';
    }
}

function openMenu() {
	document.body.classList += " menu--open"
   }
function closeMenu() {
	document.body.classList.remove('menu--open')
   }

   document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'not__loading'
    const searchButtons = document.querySelectorAll('.not__loading');
    console.log(searchButtons);

    searchButtons.forEach(button => { 
        button.addEventListener('click', function() {
       //     // Change button class to indicate loading
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