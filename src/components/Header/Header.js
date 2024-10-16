// Ensure the event listeners are added after the DOM is loaded
console.log('Header.js loaded');

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.searchBtn');
    const cartBtn = document.querySelector('.cartBtn');

    if (searchBtn && cartBtn) { // Ensure both elements exist
        searchBtn.addEventListener('click', function() {
            alert('Search button clicked!');
        });

        cartBtn.addEventListener('click', function() {
            alert('Cart button clicked!');
        });
    } else {
        console.error('Search or Cart button not found in the DOM.');
    }
});
