$( document ).ready(function(){
    var isHidden = true
    $("#show-password").click(function() {

        if(isHidden) {
            document.getElementById('show-password').src='Assets/icn-show-password-active.png'
            document.getElementById('password-field').type = 'text'
        } else {
            document.getElementById('show-password').src='Assets/icn-show-password.png'
            document.getElementById('password-field').type = 'password'
        }
        isHidden = !isHidden
    });

    $('#avatar').click(function(){ $('#imgupload').trigger('click'); });
    $('#pencil-icon').click(function(){ $('#imgupload').trigger('click'); });
})

