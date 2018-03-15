import $ from 'jquery';
import { TweenMax, Power1 } from 'gsap';
import 'gsap/ScrollToPlugin';

class Parallax {
    constructor () {
        this.mousewheelHandler = this.mousewheelHandler.bind(this);
        this.init();
    }

    // updateLayer ($layer) {
    //     const topDistance = window.pageYOffset;
    //     const depth = $layer.attr('data-depth');
    //     const movement = -(topDistance * depth);

    //     TweenLite.to($layer, 1.5, { 
    //         top: movement, 
    //         ease: Power1.easeOut
    //     });  
    // }

    // handleScroll () {
    //     const me = this;

    //     $('.layer').each(function () {
    //         me.updateLayer($(this));
    //     });
    // }

    // updateLayer ($layer, delta) {
        
    // }

    // updateLayers (delta) {
    //     const me = this;

    //     $('.layer').each(function () {
    //         me.updateLayer($(this), delta);
    //     });
    // }

    scrollPage (delta) {
        const time = 0.8;
        const distance = 150;
        const $window = $(window);

        TweenMax.to($window, time, { 
            scrollTo: { 
                y: $window.scrollTop() - (distance * delta)
            }, 
            ease: Power1.easeOut
        });
    }

    mousewheelHandler (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.returnValue = false;

        let delta;

        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        } else if (event.detail) {
            delta = -event.detail / 3;
        } else {
            delta = 0;
        }

        this.scrollPage(delta);
    }

    init () {
        // $(window).on('scroll', this.handleScroll.bind(this)); 
        // $(window).on('mousewheel DOMMouseScroll', this.mousewheelHandler); 

        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.mousewheelHandler, false);
        }

        window.onmousewheel = 
        document.onmousewheel = this.mousewheelHandler;
    }
}

export default Parallax;