 
function validateText(id)
{
  if($("#"+id).val()==null || $("#"+id).val()=="")
  {
    var div = $("#"+id).closest("div");
    div.removeClass("has-success");
    $("#glypcn"+id).remove();
    div.addClass("has-error has-feedback");
    div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
    return false;
  }
  else
  {
    var div = $("#"+id).closest("div");
    div.removeClass("has-error");
    div.addClass("has-success has-feedback");
    $("#glypcn"+id).remove();
    div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
  }
}

/*function validation()
{

var namepattern = /^[a-zA-Z ]+$/;

  var dname = $("#name").val();
  if(!namepattern.test(dname))
  {
  $("#name").focus();
  $("#1").html("enter  name");
  return false;
  }
  else  
  {
  $("#1").html("");
  }
}
  */
 
$(document).ready(

    function()
    {
      $("#contactbtn").click(function()
        {
           if(!validateText("name"))
          {
            return false;
          }
          if(!validateText("username"))
          {
            return false;
          }
          if(!validateText("email"))
          {
            return false;
          }
          if(!validateText("password"))
          {
            return false;
          }
          
         /*  if(!validateText("confirm_password"))
          {
            return false;
          }*/
           if(!validateText("address"))
          {
            return false;
          }
           if(!validateText("city"))
          {
            return false;
          }
           if(!validateText("state"))
          {
            return false;
          }
           if(!validateText("country"))
          {
            return false;
          }
           if(!validateText("pincode"))
          {
            return false;
          }

          $("form#contactform").submit();

        });
    }

  );
