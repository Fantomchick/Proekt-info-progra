$('#save-button').click(
    function() {
        //Подбираем данные с HTML
        let email = $('#email_account"').val();
        let password = $('#password_account"').val();
        let nickname = $('#nickname_account"').val();
        let codEmail = $('#cod-email_account"').val()
        let accountButton = $('#save-button');

        const CSRF = $('[name=csrfmiddlewaretoken]').val();

        let userData = {
            'email' : email,
            'codemail':codEmail,
            'password' : password,
            'nickname' : nickname,
            'csrfmiddlewaretoken': CSRF
        }

        $.ajax({
            url: '/account/',
            type: 'POST',
            dataType: 'json',
            data: userData,

            success: 
                function(data) {
                    regButton.text('Успешно');
                    regButton.prop('disabled', true);
                    regButton.css({
                        'background-color': '#4CAF50',
                        'color': '#fff',
                    });
                    window.location.href = '/'; //Переход на главную сайта
                },
            error: function (xhr) {
                if (xhr.responseJSON) {
                    accountButton.prop('disabled', false);
                    accountButton.val(xhr.responseJSON.message);
                    alert(xhr.responseJSON.message);
                }
            }              
        });
    }
);