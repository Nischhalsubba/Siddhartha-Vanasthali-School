//mobile hamburger menu
const hamburger = document.querySelector('div.hamburger');
const menuItems = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    hamburger.classList.toggle('open');
})

var elementsWithGlide = document.querySelectorAll('.glide');
elementsWithGlide.forEach(glideObj => {
    var glide = new Glide(glideObj, {
        type: 'carousel',
        perView: 1,
    })

    //custom settings for teams carosel
    if (glideObj.classList.contains("team")) {
        glide.update({
            breakpoints: {
                768: {
                    perView: 1
                },
                1050: {
                    perView: 3
                }
            },
            gap: 30,
            perView: 4
        })
    }

    glide.mount();
})


ScrollOut();