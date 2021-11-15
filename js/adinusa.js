if (location.protocol !== "https:") {
    location.protocol = "https:";
}
  

$( document ).ready(function() {
    $('.content-course > ul').addClass('list-disc ml-5 space-y-1 mt-3');
    $('.content-course > ol').addClass('list-decimal ml-5 space-y-1 mt-3');
});


var btn = $('#button');

$(window).scroll(function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

