// Smooth Scrolling
$('#navbar a').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop : $(hash).offset().top 
				// scrollTop : $(hash).offset().top - 65
			},
			800
		);
	}
});