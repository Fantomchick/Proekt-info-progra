$('#btn-answering-comment').click(
    function () {
        const answerButton = $('#btn-answering-comment')
        const answerCommentText = $('#comment-answering-area');
        console.log(answerCommentText)
        const CSRF = $('[name=csrfmiddlewaretoken]').val();

        let userData = {
            'answerCommentText': answerCommentText,
            'csrfmiddlewaretoken': CSRF
        }

        let urlLink = 'comment-answering/';
        $.ajax({
            url: urlLink,
            type: 'POST',
            dataType: 'json',
            data: userData,
            success:
                function (data) {
                    console.log(answerCommentText)
                    console.log('Success: ', data);
                    answerButton.val('Ответ успешно дан');
                    answerButton.prop('disabled', true);
                },
            error:
                function (xhr) {
                    console.log(answerCommentText)
                    console.log('Error: ', xhr.responseJSON.message);
                    answerButton.val(xhr.responseJSON.message);
                    alert(xhr.responseJSON.message);
                },
        });
})