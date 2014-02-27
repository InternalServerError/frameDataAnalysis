jQuery(document).ready(function() {
	jQuery("#deleteCharacter").on('click', function(e) {
		e.preventDefault();
		var characterId = jQuery("input#characterID").val();
		jQuery.ajax({
			url: "/character/destroy/"+characterId,
			type: "DELETE",
			success: function() {
				document.location.href='/character/list';
			}
		});
	});
});