"use strict"

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function toggleMobileMenu() {
    let mobileMenu = document.querySelector('.modal-menu-mobile')
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
    } else {
        mobileMenu.classList.add('open');
    }
}

window.addEventListener('scroll', function() {
    let footer = document.querySelector('.site-footer-container');
    if (isInViewport(footer)) {
        footer.classList.remove('hide');
    }
});

