$( document ).ready(function(){

    $("#btn-register").click(function() {
        window.location.href = "home-donatur.html";
    });

    $("#btn-register-google").click(function() {
         window.location.href = "home-donatur.html";
    });

    $('#avatar').click(function(){ $('#imgupload').trigger('click'); });
    $('#pencil-icon').click(function(){ $('#imgupload').trigger('click'); });
})

