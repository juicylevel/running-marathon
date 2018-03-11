import $ from 'jquery';

class Parallax {
	constructor () {
		this.init();
	}

	updateLayer ($layer) {
		const topDistance = window.pageYOffset;
		const depth = $layer.attr('data-depth');
	    const movement = -(topDistance * depth);

	    $layer.css({
	    	top: movement + 'px'
	    })
	}
    
	handleScroll (event) {
		const me = this;
		
		$('.layer').each(function () {
			me.updateLayer($(this));
		})
	}

	init () {
		$(window).on('scroll', this.handleScroll.bind(this));
	}
}

export default Parallax;