$(document).ready(function () {
      
});

function loadBannerVersion(banner) {
  bannerID = 'banner_' + $(banner).attr('id');
  $.each($('div[id^="banner_"]'), function(index, data) {
    if ($(data).attr('id') != bannerID) {
      $(data).parent().css('display', 'none');
    }
    else {
    reloadFrame($(data).attr('id').split('_').pop());
      $(data).parent().css('display', 'inline');
    }
  });
}


function reloadFrame(value) {
  if ($('#frame_'+value).data('expand') == '1') {
    var width = $('#frame_'+value).data('width');
    var height = $('#frame_'+value).data('height');
    resizeIframe(width, height, 'frame_'+value);
  }
  var src = $('#frame_'+value).attr('src');
  $('#frame_'+value).attr('src', src);
}

function reloadFrames(){
  $.each($('div[id^="banner_"]'), function(index, data) {
    reloadFrame($(data).attr('id').split('_').pop());
  });
}
