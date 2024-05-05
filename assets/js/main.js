$('#btnLang').click(function(){
  url=$("#selectLang").val();
  window.open(url)
})


const mainSlide = new Swiper('.main-slide',{
 loop: true,
 speed : 1000,
 slidesPerView : 1,
 slidesPerGroup: 1,
 autoplay: {
   delay: 3000,
 },
  navigation:{
    nextEl:".next",
    prevEl:".prev"
  },
  pagination:{
    el:""
  },
  pagination:{
    el:".fraction",
    type:"custom",
    renderCustom:function(swiper, current, total){
      return `<span class="curr">${current}</span>-<span class="total">${total}</span>`
    }
  },
})


const guideSlide = new Swiper('.guide-slide',{
  loop: true,
  speed : 1000,
  slidesPerView : 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
  },
  navigation:{
    nextEl:".next",
    prevEl:".prev"
  },
  pagination:{
    el:""
  },
  pagination:{
    el:".fraction",
    type:"custom",
    renderCustom:function(swiper, current, total){
      return `<span class="curr">${current}</span>-<span class="total">${total}</span>`
    }
  },
})

const citizenSlide = new Swiper('.citizen-slide',{
  loop: true,
  speed : 1000,
  slidesPerView : 4,
  spaceBetween: 16,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
  },
 pagination:{
   el:".pagination",
   clickable: true,
 }
 })
 
swiperControl(".sc-main-slide",mainSlide);
swiperControl(".sc-guide-slide",guideSlide);
swiperControl('.sc-citizen-silde',citizenSlide);



popupLayer('.inner .btn-menu','#siteMap');
popupLayer('#mainSlideAllBtn','#mainAlert');
popupLayer('#guideSlideAllBtn','#guideAlert');



$('.sc-board .tab a').click(function(e){
  e.preventDefault();

  $(this).parents('.content').addClass('on').siblings().removeClass('on');
})


$('#footer .tab-detail').click(function(e){
  e.preventDefault();

  if ($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('.sub').stop().slideUp();
    $(this).attr('aria-expanded', 'false');
  } else {
    $('#footer .tab-detail').removeClass('active').siblings('.sub').stop().slideUp();
    $(this).addClass('active').siblings('.sub').stop().slideDown();
    $(this).attr('aria-expanded', 'true');
  }
});


$(window).scroll(function(){
    curr = $(this).scrollTop(); 
    target = $('.hero').offset().top; 

    if (curr >= target) {

        $('.group-logo').addClass('on')
    } else {

        $('.group-logo').removeClass('on')
    }
})


$(".depth1-item").hover(function(){
  $(this).find('.depth2-area').addClass('on')
  $(this).find('.point').addClass('on')

},function(){
  $(this).find('.depth2-area').removeClass('on')
  $(this).find('.point').removeClass('on')
})

$(function() {
  // 이벤트 핸들러 등록
  $('.depth1-item').on('keydown', handleTab);
});

$(document).keydown(function(event) {
  if (event.keyCode === 9) { // 탭 키가 눌렸을 때
      handleTab(event); // handleTab 함수 호출
  }
});

function handleTab(event) {
  var currentDepth1Item = $(event.currentTarget);
  currentDepth1Item.children('.depth2-area').addClass('on');
  currentDepth1Item.siblings().children('.depth2-area').removeClass('on');
  
}



$('#goTop').click(function(e){
  e.preventDefault();

  window.scrollTo({top:0,behavior:"smooth"})
})


/**
 * 
 * @param {부모프레임} frame 
 * @param {슬라이드이름} slideName 
 */
function swiperControl(frame,slideName){
  $(`${frame} .owl-next`).click(function(){
    slideName.slideNext();
  })
  $(`${frame} .owl-prev`).click(function(){
    slideName.slidePrev();
  })
  
  $(`${frame} .btn-area .stop`).click(function(){
    if ($(this).hasClass('active')) {
      slideName.autoplay.start();
    } else {
      slideName.autoplay.stop();
    }
    $(this).toggleClass('active');
  })
}

/**
 * 
 * @param {팝업열기버튼} targetBtn 
 * @param {팝업이름} popName 
 */
function popupLayer(targetBtn, popName) {
  const $targetBtn = $(targetBtn);
  const $popName = $(popName);

  $targetBtn.click(function () {
    $('body').addClass('hidden');
    $popName.addClass('active');
    $targetBtn.attr('aria-expanded', 'true');
  });

  $('.popup-close').click(function () {
    $popName.removeClass('active');
    $('body').removeClass('hidden');
    $targetBtn.attr('aria-expanded', 'false');
  });
}