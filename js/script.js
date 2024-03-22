const navToggle = document.getElementsByClassName('nav-toggle')[0];
const navLinks = document.getElementsByClassName('nav-link');

navToggle.addEventListener('click', function(){
    for(var i=0; navLinks.length; i++)
        navLinks[i].classList.toggle('active');
    
    

});
