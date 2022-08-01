jQuery(document).ready(function() {
	console.log("Ready");
	jQuery(".mypkg").submit(function(e) {
		e.preventDefault();
		let form = this;
		let title = jQuery(form).find('.pack-tit')[0].innerText;
		let price = jQuery(form).find('.price')[0].innerText;
		let packDet = jQuery(form).find('.pack-det')[0].innerText;
		let desc = jQuery(form).find('.desc')[0].innerText;
		jQuery("#get_title").text(title);
		jQuery("#get_price").text(price);
		jQuery("#get_desc").text(desc);
		jQuery("#value-us").text(packDet);
	});
});
