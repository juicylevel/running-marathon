import $ from 'jquery';
import Parallax from './Parallax';
import Counter from './Counter';
import 'normalize.css';
import './scss/index.scss';

$(document).ready(() => {
    new Parallax();
    new Counter();
});