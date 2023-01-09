function heroImage() {
    let screens = [
        "/work/cocoa/img/thumb.jpg",
        "/work/onyx/img/thumb.jpg",
        "/work/securus/img/thumb.jpg",
        "/work/yobi/img/thumb.jpg",
        "/work/ezlynx/img/thumb.jpg"];
    let code = "";

    for (screen of screens) {
        code += `
        <div class="col">
          <div class="ItemCard">
            <figure class="ItemCard__thumb">
              <img src="${screen}" alt="">
              <span class="shadow cover"></span>
            </figure>
          </div>
        </div>
      `;
    }
    document.querySelector('.hero-media').insertAdjacentHTML('beforeend', code);
}

heroImage();
setTimeout(()=> {
    document.querySelector('.hero-media').classList.remove('hide');
}, 0);
setTimeout(()=> {
    document.querySelector('.hero-text-para').classList.remove('hide');
    }, 100);
setTimeout(()=> {
    document.querySelector('.hero-text-cta').classList.remove('hide');
    }, 300);
