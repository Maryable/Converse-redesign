'use strict'

$(function(){
  // 메인 슬라이드 버튼 호버 애니메이션 
  $('.link__btn').hover(()=> {
    $('.link__btn').addClass('activeBtn');
  }, ()=> {
    $('.link__btn').removeClass('activeBtn');
  });

  // 햄버거버튼 ==== 모바일 상세메뉴
  $('.hamburger').on('click', ()=> {
    $('nav').css({'right':'0'}).addClass('active').fadeIn();
    $('.gnb li:nth-child(n+2)').css('display', 'block');
    $('.search_wrap').removeClass('active');
  });

  $('.nav button.close').on('click', ()=> {
    $('nav').removeClass('active');
    $('.gnb li:nth-child(n+2)').css('display', 'none');
  });
  
  $('.nav__item.search').click(function(){
    $('.search_wrap').toggleClass('active')
  });

  // new arrival slider
  let swiper1 = new Swiper('.new-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    }, 
    slidesPerView: 2,
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



});


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

