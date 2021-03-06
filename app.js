TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options 
  // responsiveWidth: 800,
  menu: '#menu',
  verticalCentered:false, //per mettere il flex
  autoScrolling: true,
  navigation: true,
  css3: true,
  

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h2");
    const lista = section.querySelectorAll("li");
    const description = document.querySelectorAll("p");
    const subtitle = document.querySelectorAll("h3")
    const button = document.querySelectorAll(".btn")

    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 })
    tl.fromTo(subtitle, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 })
    tl.fromTo(description, 0.5, { opacity: 0, y: "50" }, { y: "0", opacity: 1 })
    tl.fromTo(lista, 0.1, { opacity: 0, y: "20" }, { y: "0", opacity: 1 })
    tl.fromTo(button, 0.5, { opacity: 0, x: "50" }, { x: "0", opacity: 1 }
    
    );
  }
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
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,

  //   slidesPerView: 1,
  // spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

});


