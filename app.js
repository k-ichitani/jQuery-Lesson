// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


// $(function(){
//   $('.box1').slideDown();
// });


// $(function(){
//   $('.box1').slideUp();
// });


// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });


// $(function(){
//   $('.box1').hide();
// });


// 確認問題
// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'height': '100px',
//       'width': '200px'
//     }).slideUp();
//   });
// });

// マウスオーバー
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// // マウスクリック
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// // 正方形クリックで正方形のみslideUpで消える
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });


$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
});