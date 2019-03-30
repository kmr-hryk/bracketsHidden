$(function() {
  $('#right_content').html(
    $('#right_content')
      .html()
      .replace(/（/g, '<span class="brackets">（')
  );
  $('#right_content').html(
    $('#right_content')
      .html()
      .replace(/）/g, '）</span><span class="emptyBrackets">()</span>')
  );

  $('.emptyBrackets').css('display', 'none');

  chrome.runtime.onMessage.addListener((btn, sender, res) => {
    if (btn === 'hideBtn') {
      $('.brackets').css('display', 'none');
      $('.brackets').css('width', '0px');
      $('.brackets').css('color', '');
      $('.emptyBrackets').css('display', '');
    } else if (btn === 'grayBtn') {
      $('.brackets').css('display', '');
      $('.brackets').css('color', 'lightgray');
      $('.emptyBrackets').css('display', 'none');
    } else {
      $('.brackets').css('display', '');
      $('.brackets').css('color', '');
      $('.emptyBrackets').css('display', 'none');
    }
    res(btn);
  });
});
