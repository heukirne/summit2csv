require(['jquery-noconflict'], function($) {
 //Ensure MooTools is where it must be
  Window.implement('$', function(el, nc){
    return document.id(el, nc, this.document);
  });

  $('.txt_rel').prop('readonly','readonly');
  
  $('.word').click(function() {
    if($(this).hasClass("big")) return false; 
    var id = $(this).parent().parent().parent()[0].id;
    var val_txt = $("input[name='"+ id +"[txt_rel]']" ).val();
    var val_id = $("input[name='"+ id +"[id_rel]']" ).val();
    $(this).addClass("big").addClass(id);
    
    if($("input[name='"+ id +"[sentena_sem_relao]']" ).prop("checked")) {
      $("input[name='"+ id +"[sentena_sem_relao]']" ).prop("checked", false);
      $("input[name='"+ id +"[sentena_sem_relao]']" ).removeClass("validation-passed");
    }
    
    if(val_txt != "" && val_txt != "Sentença sem relação") $("input[name='"+ id +"[txt_rel]']" ).attr('value', val_txt + " " + $(this).text());
    else $("input[name='"+ id +"[txt_rel]']" ).attr('value',$(this).text());
    
    if(val_id != "" && val_id != "-1") $("input[name='"+ id +"[id_rel]']" ).val(val_id + "," + $(this).attr('data-id'));
    else $("input[name='"+ id +"[id_rel]']" ).val($(this).attr('data-id'));
  });
  
  $('.corrigir').click(function() {
    var id = $(this).parent().parent()[0].id;
    $("input[name='"+ id +"[txt_rel]']" ).attr('value',"");
    $("input[name='"+ id +"[id_rel]']" ).val("");
    
    if($(".word").hasClass(id)) $(".word").removeClass("big");
    
    if($("input[name='"+ id +"[sentena_sem_relao]']" ).prop('checked')){
      $("input[name='"+ id +"[sentena_sem_relao]']" ).prop("checked", false);
      $("input[name='"+ id +"[sentena_sem_relao]']" ).removeClass("validation-passed");
    }
  });
  
  $('.sentena_sem_relao').click(function() {
    var id = $(this).parent().parent().parent().parent()[0].id;
    
    if($(this).prop('checked')) {
      $("input[name='"+ id +"[txt_rel]']" ).attr('value',"Sentença sem relação");
      $("input[name='"+ id +"[id_rel]']" ).val("-1");
    }
    else {
      $("input[name='"+ id +"[txt_rel]']" ).attr('value',"");
      $("input[name='"+ id +"[id_rel]']" ).val("");
      $("input[name='"+ id +"[sentena_sem_relao]']" ).removeClass("validation-passed");
    }
  });
}); 