"use strict"
const works = [
    // {
    //     id: 18,
    //     name: 'Yobi Seed Fund Startup Website',
    //     img: '../img/portfolio/yobi-startup-website.jpg'
    // },
    {
        id: 16,
        name: 'Yobi Agentic AI Website',
        img: '../img/portfolio/yobi-ai-website.jpg'
    },
    {
        id: 17,
        name: 'Yobi Startup App',
        img: '../img/portfolio/yobi-app-2.jpg'
    },
    {
        id: 5,
        name: 'End to End Traceability',
        img: '../img/portfolio/by-e2e.jpg'
    },
    {
        id: 6,
        name: 'Edn to End Order Fulfillment',
        img: '../img/portfolio/by-e2e-order-timeline.jpg'
    },
    {
        id: 3,
        name: 'Design System',
        img: '../img/portfolio/by-design-system.jpg'
    },
    {
        id: 2,
        name: 'Data Modeler',
        img: '../img/portfolio/by-data-modeler.jpg'
    },
    {
        id: 8,
        name: 'Identity and Access Dashboard',
        img: '../img/portfolio/by-liam-api-1.jpg'
    },
    {
        id: 11,
        name: 'Client Center B2B2C Mobile App',
        img: '../img/portfolio/client-center-1.jpg'
    },
    {
        id: 0,
        name: 'Application Lifecycle',
        img: '../img/portfolio/by-app-lifecycle.jpg'
    },
    {
        id: 1,
        name: 'Company Provisioning',
        img: '../img/portfolio/by-company-provisioning.jpg'
    },
    {
        id: 9,
        name: 'Packing Station',
        img: '../img/portfolio/by-packing-station.jpg'
    },
    {
        id: 7,
        name: 'Identity and Access Management',
        img: '../img/portfolio/by-iam.jpg'
    },
    {
        id: 10,
        name: 'Call Sumo Website Redesign',
        img: '../img/portfolio/callsumo-website.jpg'
    },
    {
        id: 4,
        name: 'Dev Portal',
        img: '../img/portfolio/by-dev-portal.jpg'
    },
    {
        id: 12,
        name: 'Cocoa Mobile App',
        img: '../img/portfolio/cocoa-1.jpg'
    },
    {
        id: 14,
        name: 'Certificate Masters',
        img: '../img/portfolio/ezlynx-cert-masters.jpg'
    },
    {
        id: 13,
        name: 'Covid IQ',
        img: '../img/portfolio/covidiq-campaign.jpg'
    },
    {
        id: 15,
        name: 'Submission Center',
        img: '../img/portfolio/ezlynx-submission-center.jpg'
    },

];

let renderedWorks = '';
works.forEach( (work) => {
    renderedWorks  += `  
      <div class="work">
        <p class="work-name mono">${work.name}</p>
        <img class="work-image" src="${work.img}" alt="">
      </div>
    `;
});

async function postData() {
    let data = {};
    data.name = document.querySelector('#contact-name').value;
    data.email = document.querySelector('#contact-email').value;
    data.phone = document.querySelector('#contact-phone').value;
    data.message = document.querySelector('#contact-message').value;

    try {
        const response = await fetch('contact.php', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json' // Indicate the content type of the body
            },
            body: JSON.stringify(data) // Convert the data object to a JSON string
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json(); // Parse the JSON response
        if (responseData) {
            console.log('Success: ', responseData.message);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

document.querySelector('#contact-submit')
    .addEventListener('click', () => {
        postData().then( () => {
            document.querySelector('.contact-form').classList.add('hidden');
            document.querySelector('.contact-success').classList.remove('hidden');

        })
    })


function runAnimations() {
    let heroAnimations = gsap.timeline();
    let name = SplitText.create('h1', { type: 'lines', mask: 'lines' });
    let portfolioTitle = SplitText.create('.portfolio-title', { type: 'lines', mask: 'lines' });
    // let siteNav = SplitText.create('.site-nav', { type: 'lines', mask: 'lines' });

    let aboutAnimation = gsap.timeline();
    let aboutTitle =  SplitText.create('.about-title', { type: 'lines', mask: 'lines' });
    let aboutDesc =  SplitText.create('.about-desc', { type: 'lines', mask: 'lines' });

    let contactAnimation = gsap.timeline();
    let contactTitle =  SplitText.create('.contact-title', { type: 'lines', mask: 'lines' });
    let contactForm =  SplitText.create('.contact-form', { type: 'lines', mask: 'lines' });


    heroAnimations.from(name.lines, {
        duration: 0.8,
        y: 100,
        autoAlpha: 0
    });
    heroAnimations.to('.product-title', {
        duration: 1,
        scrambleText: 'Product Designer / Product Manager / Product Strategist'}
    );
    heroAnimations.fromTo('.site-nav', {
        duration: 0.1,
        opacity: 0
    }, {
        opacity: 1
    });
    heroAnimations.to('.site-nav-home', {
        duration: 0.1,
        scrambleText: 'Home'}
    );
    heroAnimations.to('.site-nav-portfolio', {
        duration: 0.1,
        scrambleText: 'Portfolio'}
    );
    heroAnimations.to('.site-nav-about', {
        duration: 0.1,
        scrambleText: 'About Me'}
    );
    heroAnimations.to('.site-nav-contact', {
        duration: 0.1,
        scrambleText: 'Contact'}
    );
    heroAnimations.from(portfolioTitle.lines, {
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
        stagger: 0.1,
    });
    heroAnimations.from('.works', {
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
        stagger: 0.1,
    });

    gsap.fromTo('.work', {
        scrollTrigger: '.work',
        y: 50,
    },{
        y:0,
    });


    gsap.from(aboutTitle.lines, {
        scrollTrigger: '.about-title',
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
    });
    gsap.from(aboutDesc.lines, {
        scrollTrigger: '.about-desc',
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
    });


    gsap.from(contactTitle.lines, {
        scrollTrigger: '.contact-title',
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
    });
    gsap.from(contactForm.lines, {
        scrollTrigger: '.contact-form',
        duration: 0.5,
        y: 100,
        autoAlpha: 0,
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.fonts.ready.then(() => {
        //Register all GSAP plugins
        gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

        // Load portfolio
        document.querySelector('.works').innerHTML = renderedWorks;

        // Run all animations
        runAnimations();
    });
});


