$(document).ready(function()
{
  var t=0;

  $(".boton").click(function(){
    if(t==0)
    {
      $(this).html("X");
      t=1;
    }
    else
    {
      $(this).html("0");
      t=0;
    }
  });

});
