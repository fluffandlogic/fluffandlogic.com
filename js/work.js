"use strict"

async function getWork(id) {
    let response = await fetch('/js/work.json');
    let works;
    if (response.ok) {
        works = await response.json();
        for (let work of works) {
            if (work.id.toLowerCase() === id) {
                // document.querySelector('.section-work-sidebar-category-title')
                //     .insertAdjacentHTML('beforeend', work["category"]);
                // document.querySelector('.section-work-logo')
                //     .insertAdjacentHTML('beforeend', work["company"]);
                document.querySelector('.section-work-sidebar-project-title')
                    .insertAdjacentHTML('beforeend', work["company"]);
                document.querySelector('.section-work-sidebar-project-desc')
                    .insertAdjacentHTML('beforeend', work["desc"]);

                let services = '';
                for (let service of work["services"]) {
                    services += `<li class="services-item">${service}</li>\n`
                }
                document.querySelector('.services-list')
                    .insertAdjacentHTML('beforeend', services);
            }
        }
    }
}
