const elements = document.querySelectorAll("li");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function addInViewClass() {
  elements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add("in-view");
    }
  });
}

window.addEventListener("load", addInViewClass);
window.addEventListener("scroll", addInViewClass);
