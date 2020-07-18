/// <reference path="jquery-3.3.1.js" />

$(document).ready(function () {
    $('#media').on('play', function () {
        $('#message').html($('#media')[0].currentSrc);
});
});