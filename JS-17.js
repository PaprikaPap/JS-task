$(document).ready(function() {
    $('#openModal').click(function() {
        $('#myModal').show();
    });

    $('#myModal').click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').hide();
        }
    });
});