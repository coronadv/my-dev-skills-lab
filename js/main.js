
var input = $('#skill-input');


function addSkills() {
    let skill = $(`<div class="skills"><button type="button" onClick="removeItem" class="btn btn-danger">X</button>      ${input.val()}</div><br>`);
    $('ul').append(skill);
    input.val('');
}

function subtractSkills(evt) {
    $(this).closest('.skills').remove();
}

$('ul').on('click', 'button', subtractSkills);

$('#add-skill').on('click', addSkills);
