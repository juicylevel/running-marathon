import $ from 'jquery';
import { TweenMax, Power1 } from 'gsap';
import 'gsap/ScrollToPlugin';

class Parallax {
    constructor () {
        this.mousewheelHandler = this.mousewheelHandler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.init();
    }

    moveLayer ($layer, scrollTop) {
        const speed = $layer.attr('data-scroll-speed');
        $layer.css('transform', 'translateY(' + -(scrollTop * speed) + 'px)');
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
        $(window).on('scroll', this.handleScroll); 

        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.mousewheelHandler, false);
        }

        window.onmousewheel = document.onmousewheel = this.mousewheelHandler;
    }
}

export default Parallax;