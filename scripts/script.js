
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 3000,
  },

})

document.querySelectorAll('.step__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.step__link').forEach(function (btn) {
      btn.classList.remove('step__link--active')
    });
    e.currentTarget.classList.add('step__link--active');
    document.querySelectorAll('.work-bottom').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work-bottom--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-bottom--active');
  });
});

new Accordion('.question', {
  duration: 300,
  elementClass: 'question__item',
  triggerClass: 'question-trigger',
  panelClass: 'question-panel',
  activeClass: 'question--active',
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list')
let menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav__list--active');

    document.body.classList.toggle('stop-scroll');

  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav__list--active');

    document.body.classList.remove('stop-scroll');

  });

});

document.querySelector('.search').addEventListener('click', (e) => {
  document.querySelector('.search-form').classList.add('search-form--active');
});

document.querySelector('.search-form__close').addEventListener('click', (e) => {
  document.querySelector('.search-form').classList.remove('search-form--active');
  e.preventDefault();
});
