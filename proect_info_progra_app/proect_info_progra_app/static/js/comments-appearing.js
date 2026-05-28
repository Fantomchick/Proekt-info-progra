function resetToComment(clickElemet){
    const $clickedBtn = $(clickElemet);
    const $form = $('.input-comment');
    inputComment = $('#comment-area')
    let createButton = $('#btn-create-comment')
    const isLastActive = $form.is(':visible') && $clickedBtn.next().hasClass('input-comment')
    $('#btn-write-comment').val('Написать комментарий')
    $('.btn-answer-comment').val('Ответить')

    if (isLastActive){
        $form.hide(); // Скрывает, если нажали второй раз на ту же кнопку
    }
    else {
        $form.hide();
        $clickedBtn.after($form);// Распологает поле под кнопкой которую нажали
        $form.show();
        $clickedBtn.val('Отмена')
    }

}
$(document).ready(function(){
    $('#btn-write-comment').click(function(){
        let createButton = $('#btn-create-comment')
        createButton.val('Добавить')
        resetToComment(this);
    });
    $('.btn-answer-comment').click(function(){
        let createButton = $('#btn-create-comment')
        createButton.val('Ответить')
        resetToComment(this);
    });
})
