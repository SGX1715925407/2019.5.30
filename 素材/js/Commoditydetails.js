var mySwiper = new Swiper ('.swiper-container', {
    // auto:true,
     autoplay: {
  delay: 1000,
  stopOnLastSlide: false,
  disableOnInteraction: true,
  
  },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },

//   effect : 'cube',    //切换效果
 
  //   如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
  //   如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // pagination:{
    //     el:'.swiper-pagination',
    //     type:'fraction',
    //     formatFractionCurrent: function (number) {
    //       switch(number)
    //         {
    //           case 1:
    //           myNum='1'
    //           break;
    //           case 2:
    //           myNum='2'
    //           break;
    //           case 3:
    //           myNum='3'
    //           break;
    //           default:myNum= number
    //         }
    //       return myNum; 
    //     },
    //   },
    
  })