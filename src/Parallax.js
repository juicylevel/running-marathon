import $ from 'jquery';
import { TweenLite, Power1 } from 'gsap';

class Parallax {
    constructor () {
        this.init();
    }

    updateLayer ($layer) {
        const topDistance = window.pageYOffset;
        const depth = $layer.attr('data-depth');
        const movement = -(topDistance * depth);

        TweenLite.to($layer, 1.5, { 
            top: movement, 
            ease: Power1.easeOut
        });  
    }

    handleScroll () {
        const me = this;

        $('.layer').each(function () {
            me.updateLayer($(this));
        });
    }

    init () {
        $(window).on('scroll', this.handleScroll.bind(this)); 
    }
}

export default Parallax;