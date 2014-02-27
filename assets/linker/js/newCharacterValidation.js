$(document).ready(function() {
	$('#form-new-character').validate(
		{
			rules: {
				name: {
					required: true
				},
				hp: {
					required: true,
					number: true
				},
				stun: {
					required: true,
					number: true
				},
				fwalkspeed: {
					required: false,
					number: true
				},
				bwalkspeed: {
					required: false,
					number: true
				},
			},
			errorPlacement: function(error, element) {
				var name = $(element).attr("name");
				error.appendTo($("#"+ name + "_validation"));
			},
			success: function(element) {
				element.addClass('valid')
			},
			failure: function(element) {
				element.addClass('error')
			}
		}
	);
});