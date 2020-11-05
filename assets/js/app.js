$('.arrow-toggle').on('click', function () {
  $('.arrow-toggle').toggleClass('active');
  $('.stream__right').toggleClass('active');
  $('.arrow.arrow_left ').toggleClass('active');
});
$('.stream__left-footer-scrollable').slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  infinite: true
});

$('.stream__left-help-box a').on('click', function(event){
  event.preventDefault();
  $('.stream , .modal').addClass('modal_active')
})
$('.modal__close .close_icon').on('click', function(){
  $('.stream , .modal').removeClass('modal_active')
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5hcnJvdy10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLmFycm93LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuc3RyZWFtX19yaWdodCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuYXJyb3cuYXJyb3dfbGVmdCAnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG4kKCcuc3RyZWFtX19sZWZ0LWZvb3Rlci1zY3JvbGxhYmxlJykuc2xpY2soe1xyXG4gIHNwZWVkOiA5MDAwLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDAsXHJcbiAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBpbmZpbml0ZTogdHJ1ZVxyXG59KTtcclxuXHJcbiQoJy5zdHJlYW1fX2xlZnQtaGVscC1ib3ggYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zdHJlYW0gLCAubW9kYWwnKS5hZGRDbGFzcygnbW9kYWxfYWN0aXZlJylcclxufSlcclxuJCgnLm1vZGFsX19jbG9zZSAuY2xvc2VfaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnN0cmVhbSAsIC5tb2RhbCcpLnJlbW92ZUNsYXNzKCdtb2RhbF9hY3RpdmUnKVxyXG59KSJdfQ==
