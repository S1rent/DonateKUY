document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById('switch-checkbox')

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            window.location.href = "home-donatur.html";
        } else {
            window.location.href = "home-penggalang-dana.html";
        }
    });
})