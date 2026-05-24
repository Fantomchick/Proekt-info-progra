function resetToComment(clickElemet){
    const $clickedBtn = $(clickElemet);
    const $form = $('.input-comment');
    inputComment = $('#comment-area')
    if ($form.is(':visible') && $clickedBtn.next().hasClass('input-comment')) {
        $form.hide(); // Скрывает, если нажали второй раз на ту же кнопку
        $clickedBtn.val('Ответить');
        inputComment = $('#comment-area')
    }
    else {
        $form.hide();
        $clickedBtn.after($form);// распологает поле под кнопкой котору нажали
        $form.show();
        $clickedBtn.val('Отмена')
    }

}
$('#btn-write-comment').click(
    function () {
        const writedBtn = $(this);
        const $form = $('.input-comment');
        inputComment = $('#comment-area')
        if ($form.is(':visible') && writedBtn.next().hasClass('input-comment')) {
            $form.hide(); // Скрывает, если нажали второй раз на ту же кнопку
            writedBtn.val('Написать комментарий')
            inputComment.value = ''
        }
        else {
            $form.hide();
            writedBtn.after($form);// распологает поле под кнопкой котору нажали
            $form.show();
            writedBtn.val('Отмена')
        }        
    })
$('.btn-answer-comment').click(
    function () {
        resetToComment(this);
    })