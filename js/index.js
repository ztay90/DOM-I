const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
let services = document.querySelectorAll('a')[0];
services.textContent = siteContent['nav']['nav-item-1'];
services.style.color = 'green';
services.style.fontSize = '1.2rem';
services.style.fontWeight = '700';


let product = document.querySelectorAll('a')[1];
product.textContent = siteContent['nav']['nav-item-2'];
product.style.color = 'green';
product.style.fontSize = '1.2rem';
product.style.fontWeight = '700';


let vision = document.querySelectorAll('a')[2];
vision.textContent = siteContent['nav']['nav-item-3'];
vision.style.color = 'green';
vision.style.fontSize = '1.2rem';
vision.style.fontWeight = '700';

let features = document.querySelectorAll('a')[3];
features.textContent = siteContent['nav']['nav-item-4'];
features.style.color = 'green';
features.style.fontSize = '1.2rem';
features.style.fontWeight = '700';

let about = document.querySelectorAll('a')[4];
about.textContent = siteContent['nav']['nav-item-5'];
about.style.color = 'green';
about.style.fontSize = '1.2rem';
about.style.fontWeight = '700';

let contact = document.querySelectorAll('a')[5];
contact.textContent = siteContent['nav']['nav-item-6'];
contact.style.color = 'green';
contact.style.fontSize = '1.2rem';
contact.style.fontWeight = '700';

// CTA
let headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Main-Content

let featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresH4.style.fontSize = "1.4rem";

let featuresContent = document.querySelectorAll('p')[0];
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutH4.style.fontSize = "1.4rem";

let aboutContent = document.querySelectorAll('p')[1];
aboutContent.textContent = siteContent['main-content']['about-content'];

let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

let servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesH4.style.fontSize = "1.4rem";

let servicesContent = document.querySelectorAll('p')[2];
servicesContent.textContent = siteContent['main-content']['services-content'];

let productH4 = document.querySelectorAll('h4')[3];
productH4.textContent = siteContent['main-content']['product-h4'];
productH4.style.fontSize = "1.4rem";

let productContent = document.querySelectorAll('p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

let visionH4 = document.querySelectorAll('h4')[4];
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionH4.style.fontSize = "1.4rem";

let visionContent = document.querySelectorAll('p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

// CONTACT
let contactH4 = document.querySelectorAll('h4')[5];
contactH4.textContent = siteContent['contact']['contact-h4'];
contactH4.style.fontSize = "1.4rem";

let address = document.querySelectorAll('p')[5];
address.textContent = siteContent['contact']['address'];

let phone = document.querySelectorAll('p')[6];
phone.textContent = siteContent['contact']['phone'];

let email = document.querySelectorAll('p')[7];
email.textContent = siteContent['contact']['email']

// FOOTER
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']

//APPEND AND PREPEND
let blog = document.createElement('a');
blog.textContent = 'Blog';
blog.setAttribute('href', "#");
blog.style.color = 'green';
blog.style.fontSize = '1.2rem';
blog.style.fontWeight = '700';

let nav = document.querySelector('nav');
nav.appendChild(blog);

let home = document.createElement('a');
home.textContent = 'Home';
home.setAttribute('href', "#");
home.style.color = 'green';
home.style.fontSize = '1.2rem';
home.style.fontWeight = '700';

let nav1 = document.querySelector('nav');
nav1.prepend(home);