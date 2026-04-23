let resendTimerInterval
function startResendTimer(buttonId, seconds) {
    if (resendTimerInterval){
        clearInterval(resendTimerInterval)
    }
    const btn = $(buttonId);
    let timeLeft = seconds;
    btn.prop('disabled', true);
    btn.addClass('disabled-style');
    btn.text(`Повтор через (${timeLeft}с)`);
    
    resendTimerInterval = setInterval(function () {
        timeLeft--;
        btn.text(`Повтор через (${timeLeft}с)`);
        if (timeLeft <= 0) {
            clearInterval(resendTimerInterval);
            btn.prop('disabled', false);
            btn.text('Повторить отправку');
            btn.removeClass('disabled-style');
        }
    }, 1000);

}