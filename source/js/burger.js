const siteNavigation = document.querySelector('.site-navigation');
const siteNavigationList = document.querySelector('.site-navigation__list');
const siteNavigationItem = document.querySelector('.site-navigation__item');
const siteNavigationLink = document.querySelector('.site-navigation__link');
const navButton = document.querySelector('.site-navigation__button');
const contactsMap = document.querySelector('.contacts__map');

// REMOVES CLASS "NO-JS"
siteNavigation.classList.remove('site-navigation--no-js');
contactsMap.classList.remove('contacts__map--no-js');

// BURGER MENU
navButton.addEventListener('click', function () {
  navButton.classList.toggle('site-navigation__button--is-pressed');
  siteNavigation.classList.toggle('site-navigation--is-opened');
})
