'use strict';
$(function() {
    var $clickArea = $('#btn-show-receipt');
    var $btn = $('#btn-deposit');
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

    $btn.click(function() {
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
    var $tc2 = $('#tc-2');
    var $ic = $('#sml-icn1');
    var $ic2 = $('#sml-icn2');
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

    $tc2.click(function() {
        $backgroundArea.css(
            {
                "visibility": "visible"
            }
        );
        $('.agreement-modal-content-2').css(
            {
                "visibility": "visible"
            }
        );
        $ic2.css (
            {
                "visibility": "hidden"
            }
         )
         $tc2.css (
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
        $('.agreement-modal-content-2').css(
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
