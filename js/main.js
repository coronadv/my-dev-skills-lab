$('#addSkill').on('click', 'button', function() {
    console.log('evt');
})

$('#element tbody').on(
    'click',
    'button',
    function () {
        console.log(this);
    }
)