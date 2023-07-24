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


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
