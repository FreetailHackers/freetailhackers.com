
$(document).ready(function() {
	$("#github-button").click(function() {
		$("#github-button").toggleClass("selected");
		$("#other-button").removeClass("selected");
		$("#other-field").hide();
		$("#github-field").toggle();
	});
	$("#other-button").click(function() {
		$("#other-button").toggleClass("selected");
		$("#github-button").removeClass("selected");
		$("#github-field").hide();
		$("#other-field").toggle();
	});
});

$.fn.mailgun_validator = function(options) {
    return this.each(function() {
        $(this).focusout(function() {
            run_validator($(this).val(), options);
        });
    });
};


function run_validator(address_text, options) {
    // don't run validator without input
    if (!address_text) {
        return;
    }

	var TLD = address_text.substr(address_text.length - 4);
	if (TLD != ".edu") {
		sweetAlert("Oops...", "We need your .edu email unless you're a high school student. If don't have a .edu email, please email us with proof of enrollment at a school in Texas at hello@freetailhackers.com", "error");
		return;
	}

    // length check
    if (address_text.length > 512) {
        error_message = 'Stream exceeds maxiumum allowable length of 512.';
        if (options && options.error) {
            options.error(error_message);
        }
        else {
            console.log(error_message);
        }
        return;
    }

    // validator is in progress
    if (options && options.in_progress) {
        options.in_progress();
    }

    // require api key
    if (options && options.api_key == undefined) {
        console.log('Please pass in api_key to mailgun_validator.')
    }

    var success = false;

    // make ajax call to get validation results
    $.ajax({
        type: "GET",
        url: 'https://api.mailgun.net/v2/address/validate?callback=?',
        data: { address: address_text, api_key: options.api_key },
        dataType: "jsonp",
        crossDomain: true,
        success: function(data, status_text) {
            success = true;
            if (options && options.success) {
                options.success(data);
            }
        },
        error: function(request, status_text, error) {
            success = true;
            error_message = 'Error occurred, unable to validate address.';

            if (options && options.error) {
                options.error(error_message);
            }
            else {
                console.log(error_message);
            }
        }
    });

    // timeout incase of some kind of internal server error
    setTimeout(function() {
        error_message = 'Error occurred, unable to validate address.';
        if (!success) {
            if (options && options.error) {
                options.error(error_message);
            }
            else {
                console.log(error_message);
            }
        }
    }, 30000);

}



// document ready

var isEmail;

function validateForm() {
	var userEmail = document.getElementById("email").value;
	if (!isEmail && userEmail.length != 0) {
		if (userEmail.length > 40) {
			sweetAlert("Sorry " + document.getElementById("name").value, "I need a shorter email", "error");
		} else {
			sweetAlert("Oops...",  userEmail + " is not a valid email", "error");
		}
		return false;
	}
	var requiredElements = document.getElementsByClassName("required");
	var i = 0;
	var foundEmptyRequired = false;
	while (i < requiredElements.length && !foundEmptyRequired) {
		foundEmptyRequired = requiredElements[i].value.length === 0;
		i++;
	}
	if (foundEmptyRequired) {
		sweetAlert("Oops...", "Please make sure to fill out all required fields", "error");
		return false;
	}
	if (document.getElementById('shirt-size').selectedIndex == 0) {
		sweetAlert('Oops...', 'Please make sure you provide your shirt size', 'error');
		return false;
	}
	
	if (document.getElementById('github').value.length == 0 && document.getElementById('other').value.length == 0) {
		sweetAlert("Oops...", "Please make sure to give us a way to verify your commit history", "error");
		return false;
	}
	if ($('#github-button').hasClass('selected')) {
		document.getElementById('other').value = "";
	} else {
		document.getElementById('github').value = "";
	}
	return true;
}

$(function() {

// attach jquery plugin to validate address
$('#email').mailgun_validator({
  api_key: 'pubkey-43da37cb342c50cbb938d240414db9cd',
  in_progress: validation_in_progress,
  success: validation_success,
  error: validation_error,
});

});



// while the lookup is performing
function validation_in_progress() {
  //don't do anything
}

// if email successfull validated
function validation_success(data) {
get_suggestion_str(data['is_valid'], data['did_you_mean']);

}

// if email is invalid
function validation_error(error_message) {
  if (error_message === 'Stream exceeds maxiumum allowable length of 512.') {
	  isEmail = false;
	  sweetAlert("Hmmmm...", "I don't think your email is that long.", "warning");
  } else {
	  isEmail = true;
  }
}

// suggest a valid email
function get_suggestion_str(is_valid, alternate) {
isEmail = true;
if (is_valid) {
} else if (alternate) {
	swal({
		title: "Did you mean...",
		text: "<span style='font-weight:bold;color:#3366BB;'>"+ alternate+ "</span>",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#96D773",
		confirmButtonText: "Yes, change it!",
		cancelButtonText: "Nope, fine as is!",
		closeOnConfirm: true,
		closeOnCancel: true,
		html: true
	},
	function(isConfirm){
		if (isConfirm) {
			document.getElementById("email").value = alternate;
		}
	});
} else {
	isEmail = false;
	sweetAlert("Oops...", document.getElementById("email").value + " is not a valid email", "error");
}
}
