$('#auth-btn').click(
    function() {
        let nickname=$('#nickname').val()
        let password=$('#password').val()
        const CSRF= $('[name=csrfmiddlewaretoken]').val()

        let userData = {
            'nickname': nickname,
            'password': password,
            'csrfmiddlewaretoken': CSRF
        }
        $.ajax({
            url: '/auth/',
            type: 'POST',
            dataType: 'json',
            data: userData
        })

    }
)