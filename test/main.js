"use strict"
gsap.registerPlugin(
    SplitText,
    ScrollTrigger,
);

window.onload = ()=> {
    load('/test/nav.html', '.main-nav');
    load('/test/footer.html', '.main-footer');
    load('/test/home.html', '.main-content', anim);
};

function anim() {
    let split = SplitText.create("h2", { type: "lines", mask: "lines" });
    gsap.from(split.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.1,
    });

    let imageContainers = document.querySelectorAll('.image');

    imageContainers.forEach(function(imageContainer, index) {
        let image = imageContainer.querySelector('img');
        gsap.fromTo(image,
            {
                yPercent: -20
            },
            {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: imageContainer,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                }
            }
        );
    });
}

function load(filename, destination, code) {
    fetch(filename)
        .then(response => {
            if (!response.ok) throw new Error('Could not load file');
            return response.text();
        })
        .then(data => {
            document.querySelector(destination).innerHTML = data;
            if (code) code();

        })
        .catch(error=> {
            console.error('Error loading the content: ', error);
        })
}

