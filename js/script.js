// script.js

// Add event listener to the search button
document.querySelector('.header__search-button').addEventListener('click', function() {
    const query = document.querySelector('.header__search-bar').value;
    alert('Searching for: ' + query);
});
