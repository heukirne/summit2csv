require(['jquery-noconflict'], function($) {
  Window.implement('$', function(el, nc){
    return document.id(el, nc, this.document);
  });
  var $ = window.jQuery;
  
  $(".txt_rel").attr('disabled','disabled');
  $('.word').click(function() {
    var id = $(this).first().parent().parent().parent()[0].id;
    $("input[name='"+ id +"[txt_rel]']" ).val($(this).text());
    $("input[name='"+ id +"[id_rel]']" ).val($(this).attr('data-id'));
  })
}); 