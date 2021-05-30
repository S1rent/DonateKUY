$( document ).ready(function(){

    $("#btn-register").click(function() {
        var radioField = document.getElementsByName('account');
        for (var i = 0; i < radioField.length; i++) {
            if (radioField[i].checked) {
                if(radioField[i].value == "pd") {
                    window.location.href = "home-penggalang-dana.html";
                } else {
                    window.location.href = "home-donatur.html";
                }
            }
        }
    });

    $("#btn-register-google").click(function() {
        var radioField = document.getElementsByName('account');
        for (var i = 0; i < radioField.length; i++) {
            if (radioField[i].checked) {
                if(radioField[i].value == "pd") {
                    window.location.href = "home-penggalang-dana.html";
                } else {
                    window.location.href = "home-donatur.html";
                }
            }
        }
    });

    $('#avatar').click(function(){ $('#imgupload').trigger('click'); });
    $('#pencil-icon').click(function(){ $('#imgupload').trigger('click'); });
})

