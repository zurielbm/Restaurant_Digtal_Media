const toggleButton = document.getElementsByClassName('nav-toggle')[0]
const navBarLinks = document.getElementsByClassName('nav-links')[0]
var navlinks = document.getElementById('links');
var navArea = document.getElementById ('nav-area');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');

    if (navlinks.style.display != 'flex' ) {
        navlinks.style.display = 'flex';
    } else {
        navlinks.style.display = 'none';
    }

    console.log(navlinks.style.display);
})

document.addEventListener('click', function(event) {
    var isClickedInside = navArea.contains(event.target);
    
    if(!isClickedInside) {
        navlinks.style.display = 'none';
    }
})