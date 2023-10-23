/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollTop = window.scrollY;

  if (scrollTop > 50) { // Ubah angka 50 sesuai dengan ketinggian navbar Anda
    navbar.classList.add('sticky-navbar');
  } else {
    navbar.classList.remove('sticky-navbar');
  }
});


