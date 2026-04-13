function startResendTimer(buttonId, seconds) {
    const btn = $(buttonId);
    let timeLeft = seconds;

    btn.prop('disabled', true);
    btn.addClass('disabled-style');

    const timer = setInterval(function () {
        timeLeft--;
        btn.text(`Повтор через (${timeLeft}с)`);

        if (timeLeft <= 0) {
            clearInterval(timer);
            btn.prop('disabled', false);
            btn.text('Повторить отправку');
            btn.removeClass('disabled-style');
        }
    }, 1000);

    return timer;
}