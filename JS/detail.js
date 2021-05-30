'use strict';
$(function() {
    var $clickArea = $('#btn-show-receipt');
    $clickArea.click(function() {
        $backgroundArea.css(
            {
                "visibility": "visible"
            }
        );
        $('.agreement-modal-content').css(
            {
                "visibility": "visible"
            }
        );
    });

    var $backgroundArea = $('.agreement-modal');
    $backgroundArea.click(function() {
        $backgroundArea.css(
            {
                "visibility": "hidden"
            }
        );
        $('.agreement-modal-content').css(
            {
                "visibility": "hidden"
            }
        );
    });

    var $closeButton = $('#close-modal-button');
    $closeButton.click(function() {
        $backgroundArea.css(
            {
                "visibility": "hidden"
            }
        );
        $('.agreement-modal-content').css(
            {
                "visibility": "hidden"
            }
        );
    });
});
