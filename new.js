let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a"); // Ensure this selects the correct links

// Select elements
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const closeIcon = document.getElementById('closeIcon');
const hamburgerIcon = document.getElementById('hamburgerIcon');

// Toggle sidebar on hamburger icon click
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle sidebar visibility
    if (sidebar.classList.contains('active')) {
        closeIcon.style.display = 'inline'; // Show close icon
        hamburgerIcon.style.display = 'none'; // Hide hamburger icon
        document.querySelector('header').classList.add('header-centered'); // Center the logo
    } else {
        closeIcon.style.display = 'none'; // Hide close icon
        hamburgerIcon.style.display = 'inline'; // Show hamburger icon
        document.querySelector('header').classList.remove('header-centered'); // Reset header layout
    }
});

// Close sidebar when close icon is clicked
closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Hide sidebar
    closeIcon.style.display = 'none'; // Hide close icon
    hamburgerIcon.style.display = 'inline'; // Show hamburger icon
    document.querySelector('header').classList.remove('header-centered'); // Reset header layout
});



// Function to handle scroll event
window.onscroll = () => {
    // Get the current scroll position
    let top = window.scrollY;

    // Loop through each section
    sections.forEach(sec => {
        // Get the offset and height of the section
        let offset = sec.offsetTop - 150; // Adjust this value as needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            // Remove the active class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            // Add the active class to the corresponding navigation link
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
};

const text = document.querySelector(".sec-text");
        const textLoad = () =>{
            setTimeout( () =>{
                text.textContent = "Frontend Developer";
            },0);
            setTimeout( () =>{
                text.textContent = "Web Developer";
            },4000);
            setTimeout( () =>{
                text.textContent = "Java Developer";
            },8000);
        };
textLoad();
setInterval(textLoad,12000);

let moon = document.getElementById("moon");
moon.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        moon.src = "dark theme icon/dark theme icon/moon.png";
    }
    else{
        moon.src = "dark theme icon/dark theme icon/sun.png";
    }
}

document.addEventListener('DOMContentLoaded', function() {
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor : true,
    spaceBetween : 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });
});