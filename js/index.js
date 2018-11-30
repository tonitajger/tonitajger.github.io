$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    scrollHorizontally: true,
    
    anchors: ['page1', 'page2', 'page3', 'page4'],
    
  });

  $('.arrow-down').click(function(){
    fullpage_api.moveSectionDown();
  })


});


