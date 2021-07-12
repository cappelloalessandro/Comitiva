TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options 
  menu: '#menu',
  verticalCentered:false, //per mettere il flex
  autoScrolling: true,
  navigation: true,
  css3: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h2");
    const description = document.querySelectorAll("p");

    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 })
    tl.fromTo(description, 0.5, { opacity: 0, y: "50" }, { y: "0", opacity: 1 }
    );
  }
});


// https://atomiks.github.io/tippyjs/

new tippy('.connections1', '.connections2', '.connections3', '.connections4', '.connections5', {

  content: 'My tooltip!',
  allowHTML: true,
  arrow:true, 
  theME:'light'
});





let img = document.querySelector('#phone-change');
let profile = document.querySelector('#profile');
let region = document.querySelector('#region');
let geolocal = document.querySelector('#geolocal');
let explore = document.querySelector('#explore');

profile.addEventListener('click', () =>{
  img.src = 'img/Profile.png'
})

region.addEventListener('click', () =>{
  img.src = 'img/region.png'
})

geolocal.addEventListener('click', () =>{
  img.src = 'img/geolocalizzazione.png'
})

explore.addEventListener('click', () =>{
  img.src = 'img/explore.png'
})



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
});


