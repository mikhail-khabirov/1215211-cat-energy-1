const siteNavigation = document.querySelector('.site-navigation');
const navButton = document.querySelector('.site-navigation__button');

siteNavigation.classList.remove('site-navigation--no-js');

navButton.addEventListener('click', function () {
  navButton.classList.toggle('site-navigation__button--is-pressed');
  siteNavigation.classList.toggle('site-navigation--is-opened');
})
