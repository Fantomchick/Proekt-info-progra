$('#reg-btn').click(
    function() {
        let password=$('#password').val()
        let email=$('#email').val()
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
                    console.error('Error', error);
                    alert(error.responseJSON.error);
                },   
        });
    }
);
$('#resend-btn').click(function () {
    let email = $('#email').val();
    startResendTimer('#resend-btn', 30);
    $.ajax({
        url: '/verify/',
        type: 'POST',
        data: { 'email': email, 'csrfmiddlewaretoken': $('[name=csrfmiddlewaretoken]').val() },
        success: function () {
            $('#registration-fields').fadeOut(300, function () {
                $('#verification-fields').fadeIn(300);
                startResendTimer('#resend-btn', 30);
            });
        },
        error:
            function (error) {
                console.error('Error', error);
                alert(error.responseJSON.error);
            },             
    });
});

$('#reg-btn-finaly').click(
    function () {
        let nickname = $('#nickname').val()
        let password = $('#password').val()
        let email = $('#email').val()
        let passwordEmail = $('#cod-email').val()
        console.log(passwordEmail)        
        const regButton = $('#reg-btn-finaly');
        const CSRF = $('[name=csrfmiddlewaretoken]').val()
        let userData = {
            'nickname': nickname,
            'password': password,
            'email': email,
            'passwordEmail': passwordEmail,
            'csrfmiddlewaretoken': CSRF
        }
        $.ajax({
            url: '/reg/',
            type: 'POST',
            dataType: 'json',
            data: userData,
            success: 
                function(data) {
                    console.log('Success: ', data);
                    regButton.text('Успешно');
                    regButton.prop('disabled', true);
                    regButton.css({
                        'background-color': '#4CAF50',
                        'color': '#fff',
                    });
                    window.location.href='/forum/all'; //переход
                },
            error:
                function (error) {
                    // console.error('Error', error);
                    alert(error.responseJSON.error);
                },   
        });

    }
);