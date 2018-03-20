import { TimelineMax, TweenMax, Power1 } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// npm install --save-dev imports-loader 

// root webpack config
// resolve: {
//     alias: {
//         test: require.resolve('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
//         loader: 'imports-loader?define=>false'
//     },
//     modules: [
//         path.resolve(__dirname), path.resolve(__dirname, 'node_modules')
//     ]
// },

// module.rules[]
// {
//     test: /\.js$/,
//     loader: 'imports-loader?define=>false'
// }

class ScrollDecorator {
    constructor () {
        this.scrollController = new ScrollMagic.Controller();
        this.createScenes();
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
}