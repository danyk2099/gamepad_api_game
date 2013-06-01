$(function(){

$('#registerButton').click(function(){

    var registrationDetails = {
        'firstname' : $('#fNameInp').val(),
        'lastname' : $('#lNameInp').val(),
        'username' : $('#userNameInp').val(),
        'password' : $('#passWordInp').val(),
        'email' : $('#emailInp').val()
    };


    var registrationSubmit = $.ajax({
        url : 'register.php',
        type: 'post',
        data: registrationDetails
    });

    registrationSubmit.done(function(registrationRespone){

    });
});



});