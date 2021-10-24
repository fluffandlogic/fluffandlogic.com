"use strict"

async function getWorks() {
    let response = await fetch('/js/work.json');
    let works;
    if (response.ok) {
        works = await response.json();
    }

    for (let work of works) {
        let code= `
          <a href="${work.url}" class="work">
            <img class="work-img" />
            ${work["company"]} ${work["name"]}
          </a>
        `;

        document.querySelector('.section-works-list')
            .insertAdjacentHTML('beforeend', code);

    }
}

getWorks();
