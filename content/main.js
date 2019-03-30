$(function() {
  $('#right_content').html(
    $('#right_content')
      .html()
      .replace(/（/g, '<span class="brackets">（')
  );
  $('#right_content').html(
    $('#right_content')
      .html()
      .replace(/）/g, '）</span>')
  );

  chrome.runtime.onMessage.addListener((btn, sender, res) => {
    if (btn === 'hideBtn') {
      $('.brackets').css('display', 'none');
      $('.brackets').css('width', '0px');
      $('.brackets').css('color', '');
    } else if (btn === 'grayBtn') {
      $('.brackets').css('display', '');
      $('.brackets').css('color', 'lightgray');
    } else {
      $('.brackets').css('display', '');
      $('.brackets').css('color', '');
    }
    res(btn);
  });
});
