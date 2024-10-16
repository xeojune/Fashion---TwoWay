// Function to load HTML file into a div and optionally run a callback after loading
function loadHTML(url, elementId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById(elementId).innerHTML = xhr.responseText;
      if (callback) {
        callback(); // Run the callback after content is loaded
      }
    }
  };
  xhr.send();
}

// Function to dynamically load a CSS file
function loadCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

// Function to dynamically load a JS file
function loadJS(url) {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// Load the home.html into the #home-wrapper div
document.addEventListener('DOMContentLoaded', function() {
  loadHTML('src/pages/Home/Home.html', 'home-wrapper', function() {
    
    // After home.html is loaded, load the header, banner, and itemlist components
    
    // 1. Load Header
    loadHTML('src/components/Header/Header.html', 'header-wrapper', function() {
      loadCSS('src/components/Header/Header.css');  // Load the header CSS
      loadJS('src/components/Header/Header.js');    // Load the header JS
    });

    // 2. Load Banner
    loadHTML('src/components/Banner/Banner.html', 'banner-wrapper', function() {
      loadCSS('src/components/Banner/Banner.css');  // Load the banner CSS
      loadJS('src/components/Banner/Banner.js');    // Load the banner JS
    });

    // 3. Load Itemlist
    loadHTML('src/components/Itemlist/Itemlist.html', 'itemlist-wrapper', function() {
      loadCSS('src/components/Itemlist/Itemlist.css');  // Load the itemlist CSS
      loadJS('src/components/Itemlist/Itemlist.js');    // Load the itemlist JS

      loadHTML('src/components/Itemlist/SearchBar/SearchBar.html', 'search-bar', function() {
        loadCSS('src/components/Itemlist/SearchBar/SearchBar.css');  // Load the searchbar CSS
        loadJS('src/components/Itemlist/SearchBar/SearchBar.js');    // Load the searchbar JS
      });
    });
  });
});
