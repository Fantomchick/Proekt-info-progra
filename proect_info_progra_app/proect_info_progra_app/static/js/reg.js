$('#reg-btn').click(
    function() {
        let password=$('#password').val()
        let email=$('#email').val()
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
        $('#return-btn').css('display','block')
        $.ajax({
            url: '/verify/',
            type: 'POST',
            data: { 'email': email, 'csrfmiddlewaretoken': CSRF },
            success: function () {
                $('#registration-fields').fadeOut(300, function () {
                    $('#verification-fields').fadeIn(300);
                    startResendTimer('#resend-btn', 30);
                });
            
            },
            error:
                function (error) {
                    alert(error.responseJSON.error);
                },   
        });
    }
);