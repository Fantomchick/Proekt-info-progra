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