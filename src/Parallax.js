import $ from 'jquery';
import { TimelineMax, TweenMax, Power1 } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'gsap/ScrollToPlugin';

class Parallax {
    constructor () {
        this.mousewheelHandler = this.mousewheelHandler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollController = new ScrollMagic.Controller();
        this.init();
    }

    moveLayer ($layer, scrollTop) {
        const speed = $layer.attr('data-scroll-speed');
        $layer.css('transform', `translateY(${-(scrollTop * speed)}px)`);
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

    createScenes () {
        const yellowToBlue = new TimelineMax().add([
            TweenMax.fromTo($('body'), 1, {
                backgroundColor: '#f0e08e'
            }, {
                backgroundColor: '#67d4ef',
                ease: Power1.easeout
            })
        ]);
        new ScrollMagic.Scene({
            triggerElement: '.layer3',
            offset: 10
        }).setTween(yellowToBlue).addTo(this.scrollController);
    }

    init () {
        $(window).on('scroll', this.handleScroll); 

        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', this.mousewheelHandler, false);
        }

        window.onmousewheel = document.onmousewheel = this.mousewheelHandler;

        this.createScenes();
    }
}

export default Parallax;