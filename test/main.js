gsap.registerPlugin(
    SplitText,
    ScrollTrigger,
);

let split = SplitText.create("h1", { type: "lines", mask: "lines" });
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
})
let output = document.querySelector('.output');
output.innerHTML = "Output = " + typeof imageContainer;

