$('#mail-confirmation-btn').click(
    function () {
        let nickname = $('#nickname').val()
        let password = $('#password').val()
        let email = $('#email').val()
        let passwordEmail = $('#cod-email').val()
        console.log(passwordEmail)        
        const regButton = $('#mail-confirmation-btn');
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

