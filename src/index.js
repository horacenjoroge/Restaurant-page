// Create and append a header
const header = document.createElement('header');
header.innerHTML = `
    <h1>Restaurant Name</h1>
    <nav>
        <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
`;
document.getElementById('content').appendChild(header);

// Create and append a hero section
const hero = document.createElement('section');
hero.id = 'hero';
hero.innerHTML = `
    <h2>Welcome to Restaurant Name</h2>
    <p>Discover the finest flavors and culinary creations in town.</p>
    <a href="#menu" class="btn">View Menu</a>
`;
document.getElementById('content').appendChild(hero);

// Create and append a menu section
const menu = document.createElement('section');
menu.id = 'menu';
menu.innerHTML = `
    <h2>Our Menu</h2>
    <div class="menu-item">
        <h3>Dish 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
        <span>$10.99</span>
    </div>
    <div class="menu-item">
        <h3>Dish 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
        <span>$12.99</span>
    </div>
    <div class="menu-item">
        <h3>Dish 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, justo at lacinia.</p>
        <span>$9.99</span>
    </div>
`;
document.getElementById('content').appendChild(menu);

// Create and append an about section
const about = document.createElement('section');
about.id = 'about';
about.innerHTML = `
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, neque at commodo.</p>
`;
document.getElementById('content').appendChild(about);

// Create and append a contact section
const contact = document.createElement('section');
contact.id = 'contact';
contact.innerHTML = `
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to make a reservation, please contact us.</p>
    <a href="tel:+1234567890">Call Us: (123) 456-7890</a>
    <a href="mailto:info@restaurant.com">Email Us: info@restaurant.com</a>
`;
document.getElementById('content').appendChild(contact);

// Create and append a footer
const footer = document.createElement('footer');
footer.innerHTML = `
    <p>&copy; 2023 Restaurant Name</p>
`;
document.getElementById('content').appendChild(footer);
import { loadContactPage } from './Contact.js';
import { loadMenuPage } from './menu.js';

const content = document.getElementById('content');
const tabs = document.querySelectorAll('.tab');

function clearContent() {
    content.innerHTML = '';
}

function showContactPage() {
    clearContent();
    const contactDiv = loadContactPage();
    content.appendChild(contactDiv);
}

function showMenuPage() {
    clearContent();
    const menuDiv = loadMenuPage();
    content.appendChild(menuDiv);
}

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        if (e.target.id === 'contact-tab') {
            showContactPage();
        } else if (e.target.id === 'menu-tab') {
            showMenuPage();
        }
    });
});

// Show the default content (e.g., menu page) when the page loads
showMenuPage();