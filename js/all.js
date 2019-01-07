$(document).ready(function () {

  // 下拉式選單 start
  $('.jq_dropdown_product').click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $('.jq_dropdown_product').toggleClass('active');
    $('.jq_dropdown_open_product').slideToggle();
  });

  $('.jq_dropdown_contact').click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $('.jq_dropdown_contact').toggleClass('active');
    $('.jq_dropdown_open_contact').slideToggle();
  });
  // 下拉式選單 end


  // 輪播效果 Stat
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'coverflow',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
    },
  })
  // 輪播效果 end


  // 滑動回頁首 start
  $('.jq_back_home_icon').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  // 滑動回頁首 end


  //滑動回頁首 close效果 start
  $('.jq_back_home_close').click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $(".jq_back_home").toggle();
  });
  //滑動回頁首 close效果 end

});