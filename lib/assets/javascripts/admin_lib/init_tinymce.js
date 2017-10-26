//= require ./modal
//= require ./modal_controller
//= require tinymce
init =  function() {
    if ($('textarea').length > 0) {
        window.modal = ''
        $.ajax({
            type: 'get',
            url: '/modal',
            success: function(response){
               $('form').append(response);
               window.modal = new(Modal);
            }
        })
    }

    tinymce.init({
        selector: 'textarea[class="textarea-tinymce"]',
        width: '79.5%',
        height: 500,
        plugins: [
            "advlist autolink lists link image uploadimage charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste",
            "textcolor colorpicker"
        ],
        style_formats: [
            {
                title: 'Основной текст',
                block: 'p'
            },{
                title: 'Вставка',
                block: 'p',
                classes: 'colorado'
            }
        ],
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | uploadimage | forecolor backcolor",

    });
};

remove = function() {
    tinymce.remove();
    return
};
$(document).on('page:load', init);
$(document).on('page:before-change', remove)
$(document).ready(init);
