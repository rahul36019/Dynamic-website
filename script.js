const animFunc = () => {
  var tl = gsap.timeline();
  tl.to('.yellow1', {
    top: '-100%',
    delay: 0.5,
    duration: 1,
    ease: 'expo.out',
  });
  tl.from(
    '.yellow2',
    {
      top: '100%',
      delay: 0.3,
      duration: 1,
      ease: 'expo.out',
    },
    'anim'
  );
  tl.to(
    '.loader h1',
    {
      color: 'black',
      delay: 0.6,
    },
    'anim'
  );
  tl.to('.loader', {
    opacity: 0,
  });
};

animFunc();

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});


var page2 = document.querySelector('.page2');

let elem = document.querySelectorAll('.elem');

console.log(elem)

elem.forEach(function(ele){
  ele.addEventListener("mouseenter", ()=>{
    var bgimg = ele.getAttribute('data-img');
    page2.style.backgroundImage =  `url(${bgimg})`;
  })
})


// navbar fucnt 