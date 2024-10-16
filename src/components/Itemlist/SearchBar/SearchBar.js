// Select the search input and form
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

// Handle the search form submission
searchForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission
  const userInput = searchInput.value; // Get user input from the form
  console.log('Search query:', userInput); // Replace this with actual search logic
  searchInput.value = ''; // Clear the input after submission
});

// Handle the focus event (remove placeholder when focused)
searchInput.addEventListener('focus', function(e) {
  e.target.placeholder = '';
});

// Handle the blur event (restore placeholder when blurred)
searchInput.addEventListener('blur', function(e) {
  e.target.placeholder = 'Search and Enter';
});
