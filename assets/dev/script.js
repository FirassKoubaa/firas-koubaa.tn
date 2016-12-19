/**
 * Created by firas on 18/12/16.
 */
$(function () {


    $('#contact-form').on('submit', function (e) {

        e.preventDefault();
        var msgtext = $('#contact-form').serialize();
        console.log(msgtext);
        //alert("ssssss");
        $.ajax({
            type: 'POST',
            url: 'assets/dev/email.php',
            data:msgtext ,
            success: function () {
                //alert('form was submitted');
            },
            error: function() {
                alert('EMAIL NOT SENT ');
            }
        });

    });
















});