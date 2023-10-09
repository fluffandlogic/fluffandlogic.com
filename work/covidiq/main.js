let lastScrollTop = 0;
addEventListener('scroll', ()=> {
  let el = document.querySelector('.link-to-work');
  let st = window.getComputedStyle(el, null);
  let tr = st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      'Unable to retrieve computed transform.';

  let trValues = tr.split('(')[1];
  trValues = trValues.split(')')[0];
  trValues = trValues.split(',');
  let [a,b,c,d] = [trValues[0], trValues[1], trValues[2], trValues[3]];
  let angle = Math.round(Math.atan2(b,a) * (180/Math.PI));

  let scrollTop = document.documentElement.scrollTop;
  let direction = scrollTop - lastScrollTop;
  lastScrollTop = scrollTop;

  if (direction < 0) {
    angle = angle + 2;
  } else {
    angle = angle - 2;
  }
  el.style.transform = 'rotate(' + (angle++) + 'deg)';
})
