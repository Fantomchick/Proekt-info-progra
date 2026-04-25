$('#reg-btn').click(
    function() {
        let password=$('#password').val()
        let email = $('#Email').val()
        let regtButton = $('#reg-btn');
        console.log(email)
        let passwordExamination = $('#password-examination').val()
        const CSRF= $('[name=csrfmiddlewaretoken]').val()
        if (password !== passwordExamination) {
            $('#password-examination').val('');
            $('#password-examination').attr('placeholder', 'Пароли не совпадают');
            $('#password-examination').css({
                'border': '1px solid red',
                'transtion': '0.3s',
            });
            $('#password-examination').addClass('error-plaseholder')
            return
        }
        $.ajax({
            url: '/verify/',
            type: 'POST',
            data: { 'email': email, 'csrfmiddlewaretoken': CSRF },
            success: function () {
                $('#return-btn').css('display','block')
                $('#registration-fields').fadeOut(300, function () {
                    $('#verification-fields').fadeIn(300);
                    startResendTimer('#resend-btn', 30);
                });
            
            },
            error: function(xhr){
                if(xhr.responseJSON) {
                    regtButton.val(error.responseJSON.error)
                    alert(error.responseJSON.error);
                }
            }        
        });
    }
);