$('#submit-btn').click(
    function() {
        let email_job = $('#email-job').val();
        let submitButton = $('#submit-btn');
        const CSRF = $('[name=csrfmiddlewaretoken]').val();
        const emailPattern = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Это регулярное выражение

        if(!emailPattern.test(email_job)) {
            submitButton.val('Неправильно введён адрес почты');
            submitButton.css('background-color', 'red'); 
            return;          
        }

        $.ajax({
            url: '/email/',
            method: 'POST',
            dataType: 'json',
            data: {
                'email_job' : email_job,
                'csrfmiddlewaretoken' : CSRF
            },
            success: function(data) {
                submitButton.val(data.message);
                submitButton.css('background-color', 'green');
                submitButton.prop('disabled', true);
            },
            error: function(xhr) {
                if(xhr.responseJSON) {
                    submitButton.val(error.responseJSON.error);
                    submitButton.css('background-color', 'red');
                }
            }
        })
    }
)