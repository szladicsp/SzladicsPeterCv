var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarscroll").style.top = "0";
  } else {
    document.getElementById("navbarscroll").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

 $('body').scrollspy({ target: '#navbarscroll' });
 
 
 
 $(document).ready(function () {
2
  $('.animated').each(function (index) {
3
    $(this).delay($(this).data('delay')).queue(function () {
4
      $(this).addClass('animate-in');
5
    });
6
  });
7
});

//Todo animate. css lásd animate uses

$(document).ready(function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
});