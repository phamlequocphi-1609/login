
$(document).ready(function(){
  $('.eye').click(function(){
       var isClass = $(this).hasClass('open');
      if (isClass){
          $(this).removeClass('open');
          $(this).prev().attr('type', 'password');
          } else {
              $(this).addClass('open');
              $(this).prev().attr('type', 'text');
          }
          
          var ischeck = $(this).find("i");
          if (ischeck){
              ischeck.toggleClass("fa-eye-slash fa-eye");
          }
      });
      $("#user_name").blur(function(){
        Check_name()
      })
      $("#user_name").on('input', function() {
        $("#error__name-message").text("")
        $("#error__name-message").removeClass("error-form")
        $("#user_name").css('border-bottom', '1px solid #fff')
      });
      $("#email").blur(function(){
        check_email()
      })
      $("#email").on('input', function(){
        $("#error__email-message").text("")
        $("#error__email-message").removeClass("error-form")
        $("#email").css("border-bottom", '1px solid #fff')
      })
      $("#pass").blur(function(){
        check_pass()
      })
      $("#pass").on('input', function(){
        $("#error__pass-message").text("")
        $("#error__pass-message").removeClass("error-form")
        $("#pass").css("border-bottom", '1px solid #fff')
      })
    $("#form-login").submit(function(){
      var isValid = true
      if(!Check_name()){
        isValid = false
      }
      if(!check_email()){
        isValid = false;
      }
      if(!check_pass()){
        isValid = false
      }
      if(isValid){
        return true;
      }else{
        return false;
      }
    })
})


