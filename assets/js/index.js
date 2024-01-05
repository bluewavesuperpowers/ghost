// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.css';

// Import JS
import { toggleDarkMode } from './darkMode';
import { initSliders } from './initSliders';
import { loadMore } from './loadMore';
import { copyToClipboard } from './copyToClipBoard';
import { changeFontColor, changeFontColorOnToggle } from './footerFontColor';
import { hideHeader, showSubNav } from './header';
import { initMobileMenu } from './mobileMenu';
import { togglePlan } from './membershipToggle';
import { scrollTop } from './scrollTop';
import { centerSwiperBtns } from './centerSliderBtns';
import { calcHeight } from './membershipCard';
import { scrollAnimate } from './scrollAnimate';
import { scrollTopAlign } from './scrollTop';
import { changeTwitterCardTheme } from './twitterTheme';

toggleDarkMode(changeTwitterCardTheme);
initSliders();
loadMore();
copyToClipboard();
changeFontColor();
hideHeader();
showSubNav();
initMobileMenu();
scrollTop();
togglePlan();
centerSwiperBtns();
calcHeight();
scrollAnimate();

const toggleDMBtns = document.querySelectorAll('.gh-dark-mode-toggle-btn');
toggleDMBtns.forEach((btn) => {
  btn.addEventListener('click', changeFontColorOnToggle);
});
window.addEventListener('load', changeTwitterCardTheme);
window.addEventListener('resize', centerSwiperBtns);
window.addEventListener('load', scrollTopAlign);
