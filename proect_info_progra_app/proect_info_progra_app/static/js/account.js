$('#save-button').click(
    function() {
        //Подбираем данные с HTML
        let email = $('#email').val();
        let password = $('#password').val();
        let nickname = $('#nickname').val();
        let codEmail=$('#cod-email').val()
        let regButton = $('#save-button');

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
            error:
                function (data) {
                    console.log('Error: ', data);
                    regButton.text("Нет такого пользователя");
                    regButton.prop('disabled', false);
                    alert("Такой пользователь уже существует!")
                },               
        });
    }
);