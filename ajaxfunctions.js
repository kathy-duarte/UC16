function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

$('#email_to_check').keyup(function(){
   this.value = this.value.toLowerCase();

       // check Email Regex Syntax right away
       if (isValidEmailAddress(this.value)) {
         $("#realtime_check").html("Valid Format");
         $("#realtime_check").removeClass("invalid");
         $("#realtime_check").addClass("valid");
       } else {
         $("#realtime_check").html("Invalid Format");
         $("#realtime_check").removeClass("valid");
         $("#realtime_check").addClass("invalid");
	   }

	   if(!$(this).val()) {
        $("#realtime_check").removeClass("invalid");
        $("#realtime_check").removeClass("valid");
		 $("#realtime_check").html("Enter Email Address");
	   }

});


$(function () {
    $('#email_validation_form').on('submit', function (e) {

$( document ).ajaxStart(function() {
  $(".email_input_label").html("loading...");
});
$( document ).ajaxStop(function() {
  $(".email_input_label").html("Verify");
});

		var email_address = $("#email_to_check").val();
    //var hash = $.md5(email_address + $('[name="request_secret"]').val());
    var hash = $.md5(email_address + $('[name="scl_request_secret"]').val());


		e.preventDefault();


$.ajax({
    url: 'https://mailboxlayer.com/php_helper_scripts/email_api_n.php?secret_key=' + hash + '&email_address=' + email_address,
    dataType: 'json',
    success: function(json) {

       if(json.format_valid == true) {
       $("#format_valid").removeClass("invalid");
       $("#format_valid").addClass("valid");
	   $("#json_format_valid").html("true");
	   } else {
       $("#format_valid").removeClass("valid");
	   $("#format_valid").addClass("invalid");
	   $("#json_format_valid").html("false");
	   }

       if(json.mx_found == true) {
       $("#mx_found").removeClass("invalid");
       $("#mx_found").addClass("valid");
	   $("#json_mx_found").html("true");
	   } else {
       $("#mx_found").removeClass("valid");
	   $("#mx_found").addClass("invalid");
	   $("#json_mx_found").html("false");
	   }

       if(json.smtp_check == true) {
       $("#smtp_check").removeClass("invalid");
       $("#smtp_check").addClass("valid");
	   $("#json_smtp_check").html("true");
	   } else {
       $("#smtp_check").removeClass("valid");
	   $("#smtp_check").addClass("invalid");
	   $("#json_smtp_check").html("false");
	   }

       if(json.catch_all == true) {
       $("#catch_all").removeClass("invalid");
       $("#catch_all").addClass("valid");
	   $("#json_catch_all").html("true");
	   } else {
       $("#catch_all").removeClass("valid");
	   $("#catch_all").addClass("invalid");
	   $("#json_catch_all").html("false");
	   }

       if(json.email) {
       $("#return_email").html(json.email);
	   $("#json_return_email").html('"' + json.email + '"');
	   } else {
	   $("#return_email").html("-");
	   $("#json_return_email").html('""');
	   }

       if(json.did_you_mean) {
	   $("#did_you_mean").html(json.did_you_mean);
	   $("#json_did_you_mean").html('"' + json.did_you_mean + '"');
	   } else {
	   $("#did_you_mean").html("-");
	   $("#json_did_you_mean").html('""');
	   }

       if(json.role == true) {
	   $("#return_role").html("True");
	   $("#json_return_role").html("true");
	   } else {
	   $("#return_role").html("False");
	   $("#json_return_role").html("false");
	   }

       if(json.disposable == true) {
       $("#return_disposable").html("True");
	   $("#json_return_disposable").html("true");
	   } else {
	   $("#return_disposable").html("False");
	   $("#json_return_disposable").html("false");
	   }

       if(json.free == true) {
       $("#result_company_address").html("True");
	   $("#json_company_address").html("true");
	   } else {
	   $("#result_company_address").html("False");
	   $("#json_company_address").html("false");
	   }

       if(json.score) {
       $("#score_box").html("Score " + json.score);
       $("#json_score").html(json.score);
	   } else {
	   }

    }
});


    });
});

$(document).on('click', '.index_show_more_smtp', function(event) {
	"use strict";
	event.preventDefault();
	$('.index_show_more_smtp').toggleText('less','more');
	$('[data-response="more"]').toggle(0);
});
