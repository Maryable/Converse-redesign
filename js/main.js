'use strict'

$(function(){
  //버튼 호버 애니메이션 
  $('.link__btns').hover(()=> {
    $(this).addClass('activeBtn');
  }, ()=> {
    $(this).removeClass('activeBtn');
  });

  // new arrival slider
  let swiper1 = new Swiper('.new-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    }, 
    slidesPerView: 2,  
    speed: 600,
    spaceBetween: 16,
    pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 12,
      }
    }
  });

  var swiper2 = new Swiper('.community-container', {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      100: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      680: {
        slidesPerView: 3.5,
        spaceBetween: 14,
      }
    }
  });

}); //제이쿼리 끝


const ScrollUp = document.querySelector('#scroll__up');
const ScrollDown = document.querySelector('#scroll__down');
// let top = window.offsetTop
ScrollUp.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});

ScrollDown.addEventListener('click',()=>{
  window.scrollBy({
    top: 450,
    behavior:'smooth'
  });
});


// const TagA = document.querySelectorAll('.link__btn');
//   TagA.addEventListener('click', ()=>{
//     e.preventDfault();
//   });

// New Arrival 슬라이드 움직이기 
// const newPrev = document.querySelector('.new-prev');
// const newNext = document.querySelector('.new-next');
// const slideTxt = document.querySelector('.New-index');
// let slides = document.querySelector('.new-container .slider'),
//     slide = document.querySelector('.new-container .slider > li'),
//     currentIdx = 1,
//     slideCount = slide.length,
//     slideWidth = slide.getBoundingClientRect().width;

  // function moveSlide(n) {
  //   slides.style.left = -n * slideWidth + 'px';
  //   currentIdx = n;
  // }

  // newNext.addEventListener('click', ()=>{
  //   if (currentIdx < 1) {
  //     moveSlide(currentIdx + 1);
  //     slideTxt.innerHTML = `1 / ${currentIdx + 1}`
  //   } else {
  //     moveSlide(0);
  //   }
  // });

  // newPrev.addEventListener('click', ()=>{
  //   if (currentIdx > 0) {
  //     moveSlide(currentIdx - 1);
  //     slideTxt.innerHTML = `1 / ${currentIdx + 1}`
  //   } else {
  //     moveSlide(slideCount + 0);
  //   }
  // });

