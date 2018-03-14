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
        if (window) {
            let a = 1;
            a++;
            a--;
            console.log(a + 3);
        }
    }
}

export default Parallax;