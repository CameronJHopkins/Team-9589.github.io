// Function to toggle sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var sidebarContainer = document.querySelector('.sidebar-container');

    sidebar.classList.toggle('show');
    sidebarContainer.style.marginLeft = sidebar.classList.contains('show') ? '0' : '-200px';

    // Ensure all tabs are closed when sidebar is toggled
    closeAllTabs();
}

// Function to open a specific tab and hide others
function openTab(tabId) {
    var contentDivs = document.querySelectorAll('.content > div');
    contentDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    var clickedTab = document.getElementById(tabId + '-tab');
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

// Function to close all tabs
function closeAllTabs() {
    var contentDivs = document.querySelectorAll('.content > div');
    contentDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
}

// Function to set default tab on page load
document.addEventListener('DOMContentLoaded', function() {
    // Open the HomeTab by default
    openTab('HomeTab');

    // Attach click event to tabs
    var tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var tabId = link.getAttribute('data-tab');
            openTab(tabId);
        });
    });

    // Attach click event to enlargeable images
    const images = document.querySelectorAll('.enlargeable');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('enlarged');
        });
    });

    // Attach click event to back-to-top button
    var backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
});

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
}

// Show or hide back-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) { // Adjust the threshold as needed
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

function toggleMoneyText() {
    var moneyDetails = document.getElementById('MoneyBreakdownDropbox');
    var toggleLink = document.getElementById('toggle-link');

    if (moneyDetails.style.display === 'none' || moneyDetails.style.display === '') {
        moneyDetails.style.display = 'block';
        toggleLink.textContent = 'Hide Details';
    } else {
        moneyDetails.style.display = 'none';
        toggleLink.textContent = 'Show Details';
    }
}
