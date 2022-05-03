$(document).ready(function () {
    $('.submit').click(function (event){
      event.preventDefault()
      var toSubmit = {};
      toSubmit.email = $("#email").val();
      toSubmit.name = $("#name").val();
      toSubmit.phone = $("#phone").val();
      toSubmit.message = $("#message").val();
      $.ajaxSetup({
        headers: {
          'Accept': "application/json",
        }
      });
      
      var form_submit = $.post("https://formspree.io/f/mqkwawqv", toSubmit);
      
      form_submit.done(function(){
        $("#form-success").modal('show');
        $("#email").val("");
        $("#name").val("");
        $("phone").val("");
        $("#message").val("");
      });
      
      form_submit.fail(function(){
        $("#form-error").modal('show');
      });
      
      
    })
  });