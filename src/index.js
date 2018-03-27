import $ from 'jquery';
import Scroller from './Scroller';
import Counter from './Counter';
import 'normalize.css';
import './scss/index.scss';

$(document).ready(() => {
    new Scroller();
    new Counter();
});