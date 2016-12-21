$('.ready').on('click', function(event) {
  event.preventDefault();
  fillLetters();
  for (var i = 0; i < 25; i++) {
    console.log('for letter',getLetterById(i),'neighbors are',findNearest(i));
  }
});
$('.clear').on('click', function(event) {
  event.preventDefault();
  for (var i = 0; i < 25; i++) {
    $('#'+i).val('');
  };
  clearLetters();
});
$('.letter_input').on('input', function() {
  $id = $(this).attr("id");
  $next=++$id;
  $('#'+$next).focus();
  $('#'+$next).select();

});
