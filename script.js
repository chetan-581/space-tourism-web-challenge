function clicked() {

    console.log('User click on menu');


    var navList = document.querySelector('.list');
    var closeIcon = document.querySelector('.mobile img[src="/starter-code/assets/shared/icon-close.svg"]');
    var hamburgerIcon = document.querySelector('.mobile img[src="/starter-code/assets/shared/icon-hamburger.svg"]');

    // Toggle the display property of the navbar
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block';
        closeIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
    } else {
        navList.style.display = 'none';
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    }

    console.log('Program run');
}    


// function setActive(clickedElement) {
//     event.preventDefault();
//     // Remove the "active" class from all links
//     var links = document.querySelectorAll('.list ul li a');
//     links.forEach(function(link) {
//       link.classList.remove('active');
//     });

//     // Add the "active" class to the clicked link
//     clickedElement.classList.add('active');
//   }