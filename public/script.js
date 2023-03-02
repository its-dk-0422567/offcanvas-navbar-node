let closeNav = document.getElementById('close-navbar');
let showNav = document.getElementById('show-navbar');
let navListContainer = document.getElementById('offcanvas');
let navLinks = document.querySelectorAll('.nav-link');


closeNav.addEventListener('click',()=>{
    navListContainer.classList.remove('show-navbar');
    // showNav.style.display = 'inline-block';
})

showNav.addEventListener('click', ()=>{
    console.log("show")
    navListContainer.classList.add('show-navbar');
    // showNav.style.display = 'none';
})

navLinks.forEach(item => {
    item.addEventListener('click',()=>{
        navListContainer.classList.remove('show-navbar');
        // showNav.style.display = 'inline-block';
    })
});
