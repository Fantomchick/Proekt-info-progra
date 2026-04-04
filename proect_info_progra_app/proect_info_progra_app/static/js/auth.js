$('#auth-btn').click(
    function() {
        let nickname_auth = $('#nickname_auth').val()
        let password_auth = $('#password_auth').val()
        let authButton=$('#auth-btn')
        const CSRF= $('[name=csrfmiddlewaretoken]').val()

        let userData = {
            'nickname_auth': nickname_auth,
            'password_auth': password_auth,
            'csrfmiddlewaretoken': CSRF
        }
        $.ajax({
            url: '/auth/',
            type: 'POST',
            dataType: 'json',
            data: userData,
            success: 
                function (data) {
                    console.log('Success: ', data);
                    authButton.text('Успешно');
                    authButton.prop('disabled', true);
                    window.location.href = '/forum/all'; //переход 
                },
            error:
                function (data) {
                    console.log('Error: ', data);
                    authButton.text("Нет такого пользователя");
                    authButton.prop('disabled', false);
                    alert("ты не существуешь!")
                },                
        })  
    }
)