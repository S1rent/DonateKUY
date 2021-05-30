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

    var $tc = $('#tc-1');
    var $ic = $('#sml-icn1');
    $tc.click(function() {
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
        $ic.css (
            {
                "visibility": "hidden"
            }
         )
         $tc.css (
            {
                "background-color": "#f9f9f9"
            }
         )
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
