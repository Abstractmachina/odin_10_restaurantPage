import home from './home.js';
import './style.css';

const app = document.querySelector("#root");

function initPage() {
    loadHeader();
    loadMain();
    loadFooter();

    loadHome();
}

function loadHeader(containerId) {

    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'navbar');
    const navHome = document.createElement('button');
    navHome.textContent = "Home";
    navHome.setAttribute('id', 'nav_home');

    const navMenu = document.createElement('button');
    navMenu.textContent = "Menu";
    navMenu.setAttribute('id', 'nav_menu');

    const navAbout = document.createElement('button');
    navAbout.textContent = "About";
    navAbout.setAttribute('id', 'nav_about');

    const navOrderNow = document.createElement('button');
    navOrderNow.textContent = "Order Now";
    navOrderNow.setAttribute('id', 'nav_ordernow');

    const navContact = document.createElement('button');
    navContact.textContent = "Contact";
    navContact.setAttribute('id', 'nav_contact');


    navBar.append(navHome, navMenu, navAbout, navOrderNow, navContact);

    header.append(navBar);
    app.append(header);

    return header;
}

function loadMain() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main')
    app.append(main);

    return main;
}

function loadFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = "Copyright Taole Chen";

    app.append(footer);

    return footer;
}

function loadHome(){
    const main = document.querySelector('#main');

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'homeContainer');

    const welcomeBanner = document.createElement("div");
    welcomeBanner.setAttribute('id', 'welcomeBanner');
    const welcomeLabel = document.createElement('h1');
    welcomeLabel.textContent = "Welcome to Plan D";
    const welcomesubLabel = document.createElement('h2');
    welcomesubLabel.textContent = "Handmade Gourmet Dumplings";
    welcomeBanner.append(welcomeLabel, welcomesubLabel);

    homeContainer.append(welcomeBanner);

    main.append(homeContainer);



}

//const app = new View();

initPage();