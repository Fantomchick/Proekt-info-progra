$('#btn-create-comment').click(
    function() {
        let textComment= $('#comment-area').val()
        let createButton = $(this)
        const CSRF= $('[name=csrfmiddlewaretoken]').val()

        let userData = {
            'textComment': textComment,
            'csrfmiddlewaretoken': CSRF
        }

        let urlLink = 'comment-creating/';

        $.ajax({
            url: urlLink,
            type: 'POST',
            dataType: 'json',
            data: userData,
            success: 
                function (data) {
                    console.log('Success: ', data);
                    createButton.val('Коммент успешно добавлен');
                    createButton.prop('disabled', true); 
                },
            error:
                function(xhr) {
                    console.log('Error: ', xhr.responseJSON.message);
                    createButton.val(xhr.responseJSON.message);
                    alert(xhr.responseJSON.message);
                },                
        })  
    }
)