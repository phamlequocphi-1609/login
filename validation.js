function Check_name(){
    var getName = $(".form-group input#user_name").val()
    if(getName == ""){
        $("#error__name-message").text("Vui lòng nhập tên vào !")
        $("#error__name-message").addClass("error-form")
        $("#user_name").css('border-bottom', '1px solid red')
        return false;
    }
    else{
        $("#error__name-message").text("")
        $("#error__name-message").addClass("error-form")
        $("#user_name").css('border-bottom', '1px solid #fff')
        return true
    }
}
function check_email(){
    var getEmail = $(".form-group input#email").val()
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(getEmail == "" || !regex.test(getEmail)){
        $("#error__email-message").text("Vui lòng nhập email !")
        $("#error__email-message").addClass("error-form")
        $("#email").css('border-bottom', '1px solid red')
        return false;
    }
    else{
        $("#error__email-message").text("")
        $("#email").css('border-bottom', '1px solid #fff')
        return true
    }
}
function check_pass(){
    var getPassword = $(".form-group input#pass").val()
    if(getPassword == ""){
        $("#error__pass-message").text("Vui lòng nhập mật khẩu !")
        $("#error__pass-message").addClass("error-form")
        $("#pass").css('border-bottom', '1px solid red')
        return false
    }else{
        $("#error__pass-message").text("")
        $("#pass").css('border-bottom', '1px solid #fff')
        return true
    }
}