import $ from 'jquery';
import Scroller from './Scroller';
// import Counter from './Counter';
import 'normalize.css';
import './scss/index.scss';

// import lightgallery from 'lightgallery/dist/js/lightgallery.min';
// import 'lightgallery/dist/css/lightgallery.min.css';

$(document).ready(() => {
    new Scroller();
    // new Counter();

    // const lightgalleryEl = document.getElementById('lightgallery');
    // if (lightgalleryEl) {
    //     lightgallery(lightgalleryEl);
    // }
});