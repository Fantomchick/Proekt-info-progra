function deleteComment(deleteButton){
    const $deleteButton = $(deleteButton);
    const commentIdString = $deleteButton.attr('data-comment-id');
    const commentId = parseInt(commentIdString, 10);
    const CSRF= $('[name=csrfmiddlewaretoken]').val();

    let userData = {
        'commentId': commentId,
        'csrfmiddlewaretoken': CSRF
    }

    let urlLink = 'comment-deleting/';

    if (confirm("Вы действительно хотите удалить этот коммент?")) {
        $.ajax({
            url: urlLink,
            type: 'POST',
            dataType: 'json',
            data: userData,
            success:
            function (data) {
                console.log('Success: ', data);
                $deleteButton.val('Коммент успешно удалён');
                $deleteButton.prop('disabled', true);
            },
            error:
            function(xhr) {
                console.log('Error: ', xhr.responseJSON.message);
                $deleteButton.val(xhr.responseJSON.message);
                alert(xhr.responseJSON.message);
            },
        });
    }
}
$('.btn-delete-comment').click(
    function () {
        deleteComment(this);
    })
