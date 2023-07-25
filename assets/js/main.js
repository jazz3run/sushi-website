/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ===== MENU SHOW ===== */
// Validate if constant exist
if(navToggle){
	navToggle.addEventListener("click", ()=>{
		navMenu.classList.add('show-menu')
	})
}

// Validate if constant exist
if(navClose){
	navClose.addEventListener("click", ()=>{
		navMenu.classList.remove('show-menu')
	})
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
	// When we click on each nav__link, we remove the show menu class
	navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
	const header = document.getElementById('header');
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >= 50 ? header.classList.add('bg-header')
					   : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== SUSCIBE ===============*/ 
const email = document.getElementById('email');

const suscribe = ()=>{
	event.preventDefault();
	if (email.value != "") {;
	alert("¡Gracias por suscribirte!");
	email.value = "";
} else{
	alert("¡No ha completado los campos!");
}
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher tan 50vh, add the show-scroll
	this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
						: scrollUp.classList.remove("show-scroll")		 
}		
window.addEventListener("scroll", scrollUp);	

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = ()=>{
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute("id"),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

	if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
		sectionsClass.classList.add('active-link')
	}else{
		sectionsClass.classList.remove('active-link')	
	}

	})
}
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon  = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = ()=> themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'

// We validate if the user previously chose a topic
if(selectedTheme){
	// If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We dave the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2000,
	delay: 50,
});

sr.reveal('.home__img, .newsletter__container, .map__web')
sr.reveal('.home__data, .footer__logo, .footer__description, .footer__content, .footer__info', {origin: 'bottom'})
sr.reveal('.about__data, .recently__data, .map__description', {origin: 'left'})
sr.reveal('.about__img, .recently__img', {origin: 'right'})
sr.reveal('.popular__card', {interval: 100})