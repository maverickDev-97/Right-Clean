// import bodyScrollLock from 'body-scroll-lock';

const html = document.querySelector('html');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const mainSection = document.querySelector('.main');

const closePopup = document.querySelector('.video-popup__close');
const openPopup = document.querySelector('.video__block');
const popup = document.querySelector('.video-popup');
const videoPlayer = document.querySelector('.video-popup__player');

const headerToggle = document.querySelector('.header__toggle');

const togglePop = () => {
    popup.classList.toggle('active');
}

openPopup.onclick = () => {
    disableScroll();
    togglePop()
}
closePopup.onclick = () => {
    enableScroll();
    togglePop();
}

const disableScroll = () => {
    html.style.cssText = 'margin: 0; height: 100%; overflow: hidden';
    body.style.cssText = 'margin: 0; height: 100%; overflow: hidden';
}

const enableScroll = () => {
    html.style.cssText = 'margin: inherit; height: inherit; overflow: visible';
    body.style.cssText = 'margin: inherit; height: inherit; overflow: visible';
}

const slideMenuTablet = () => {
    headerToggle.classList.toggle('active');
    if (headerToggle.classList.contains('active')) {
        disableScroll();
        headerToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 5.25L5.25 18.75" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.75 18.75L5.25 5.25" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        menu.style.display = 'block';
        header.style.marginRight = '300px';
        mainSection.style.marginRight = '300px';
    } else {
        enableScroll();
        headerToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'
        menu.style.display = 'none';
        header.style.marginRight = '0';
        mainSection.style.marginRight = '0';
    }
}

const menuMobile = () => {
    headerToggle.classList.toggle('active');
    if (headerToggle.classList.contains('active')) {
        menu.style.display = 'block';
        disableScroll();
    }   else {
        menu.style.display = 'none';
        enableScroll();
    }
}

headerToggle.onclick = () => {
    console.log(window.screen.width);
    if (window.screen.width >= 580 && window.screen.width <= 768) {
        slideMenuTablet()
    } else {
        menuMobile();
    }
}