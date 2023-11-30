$('.phone').each(function(){
    window.intlTelInput(this, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    separateDialCode: true,
});
})
$(document).ready(function(){
    $('.phone').mask('000-000-000',{placeholder:"000-000-000"}, {autoclear: true});
});

$(document).ready(function() {
    $('.select').select2();
});

$(".select").select2().change(function() {
    $(this).valid();
});


$('#fileUpload').change(function() {
  var i = $(this).parents('.file-upload-form').find('.add-clone-text p').clone();
  var file = $('#fileUpload')[0].files[0].name;
  $(this).parents('.file-upload-form').find('.add-clone-text p').text(file);
});

var uploadField = document.getElementById("fileUpload");

uploadField.onchange = function() {
    if(this.files[0].size > 3000000){
       alert("File is too big! Select file no more than 3MB");
       this.value = "";
    };
};

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".form-review").validate({
        rules: {
            "name": {
                required: true,
            },
            "last_name": {
                required: true,
            },
            "phone": {
                required: true,
                // number: true,
                // min: 9,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "topic": {
                required: true,
            },
        },
        messages: {
            "name": {
                required: "Required field",
            },
            "last_name": {
                required: "Required field",
            },
            "phone": {
                required: "Required field",
                // number: "Enter only number",
                // min: "Enter full phone number",
            },
            "email": {
                required: "Required field",
                emailRegex: "Please, enter valid email address",
            },
            "topic": {
                required: "Required field",
            },
            
        },
    });
});

