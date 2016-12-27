/**
 * Created by firas on 18/12/16.
 */
$(function () {

// MAILING

    $('#contact-form').on('submit', function (e) {

        e.preventDefault();
        var msgtext = $('#contact-form').serialize();
        console.log(msgtext);
        //alert("ssssss");
        $.ajax({
            type: 'POST',
            url: 'assets/dev/email.php',
            data: msgtext,
            success: function () {
                //alert('form was submitted');
            },
            error: function () {
                alert('EMAIL NOT SENT ');
            }
        });
    });


// PAGE COUNTER

    // CRON CLEARING LOCAL STORAGE
    var schedule = require('node-schedule'),
        cron = schedule.scheduleJob({hour: 00, minute: 00}, function () {
            localStorage.clear();
        });

    // COUNTING
    if (localStorage.pagecount) {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
    }
    else {
        localStorage.pagecount = 1;
    }
    console.log("Number of visits until now is: " + localStorage.pagecount + " time(s).");


});