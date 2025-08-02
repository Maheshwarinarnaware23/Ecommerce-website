// JavaScript for Amazon Clone Homepage

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const category = searchSelect.value;
    if (query) {
        alert(`Searching for "${query}" in category "${category}"`);
        // You can redirect or handle actual search logic here
    } else {
        alert("Please enter a search term.");
    }
});

// Cart click handler
const cartButton = document.querySelector('.nav-cart');
cartButton.addEventListener('click', () => {
    alert("Cart feature is under development!");
});

// Hover effect for All menu (optional enhancement)
const panelAll = document.querySelector('.panel-all');
panelAll.addEventListener('mouseover', () => {
    panelAll.style.backgroundColor = '#37475A';
});
panelAll.addEventListener('mouseout', () => {
    panelAll.style.backgroundColor = 'transparent';
});
