const regFields = document.getElementById('registration-fields');
const verFields = document.getElementById('verification-fields');
const returnBtn = document.getElementById('return-btn');
const myModalEl = document.getElementById('exampleModal1');

function resetToRegistration() {
    regFields.style.display = 'block';
    verFields.style.display = 'none';
    const codeInput = verFields.querySelector('input');
    if (codeInput) codeInput.value = '';
    $('#return-btn').css('display', 'none')
}

if (returnBtn) {
    returnBtn.addEventListener('click', function () {
        resetToRegistration();
    });
}


myModalEl.addEventListener('hidden.bs.modal', function () {
    resetToRegistration();
})