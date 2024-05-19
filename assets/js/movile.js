document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.menu-movile');
    botonMenu.addEventListener('click', function(e) {
        e.preventDefault()
        const menuMovile = document.getElementById('menu-movile');
        menuMovile.style.display = 'block';
        menuMovile.style.color = 'white';
        menuMovile.innerHTML = 
        '<div class="menu-items">'+
        '<li>'+
        '<a href="">Home</a>'+
        '</li>'+
        '<li>'+
        '<a href="">About</a>'+
        '</li>'+
        '<li>'+
        '<a href="">Projects</a>'+
        '</li>'+
        '<li>'+
        '<a href="">Blog</a>'+
        '</li>'
        
    })
})