import $ from 'jquery';
import { TweenMax, Power4 } from 'gsap';
import 'gsap/ScrollToPlugin';

class Scroller {
    constructor () {
        this.mousewheelHandler = this.mousewheelHandler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.init();
    }

    moveLayer ($layer, scrollTop) {
        const speed = parseFloat($layer.attr('data-scroll-speed')) || 1;
        const transform = `translateY(${-(scrollTop * speed)}px)`;
        $layer.css('transform', transform);
    }

    moveLayers () {
        const me = this;
        const scrollTop = $(window).scrollTop();

        $('.layer').each(function () {
            me.moveLayer($(this), scrollTop);
        });
    }

    handleScroll () {
        this.moveLayers();
    }

    scrollPage (delta) {
        const time = 2;
        const distance = 380;
        const $window = $(window);

        TweenMax.to($window, time, { 
            scrollTo: { 
                y: $window.scrollTop() - (distance * delta)
            }, 
            ease: Power4.easeOut
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
        $(window).on('scroll', this.handleScroll); 

        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.mousewheelHandler, false);
        }

        window.onmousewheel = document.onmousewheel = this.mousewheelHandler;
    }
}

export default Scroller;

// getTranslate ($obj) {
//     const matrix = $obj.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
//     const x = matrix[12] || matrix[4] || 0;
//     const y = matrix[13] || matrix[5] || 0;
//     return { x, y };
// }

// const layerTranslate = this.getTranslate($layer);
// const transform = `
//     translate(
//         ${layerTranslate.x}px, 
//         ${-(scrollTop * speed)}px
//    )
// `;