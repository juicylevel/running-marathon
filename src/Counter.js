import $ from 'jquery';
import moment from 'moment';
import 'moment-duration-format';
import { declOfNum } from './utils';

class Counter {
    constructor () {
        this.end = null;
        this.time = null;
        this.marathonDate = '2019-05-12T11:00';
        this.start();
    }

    duration () {
        const now = moment();
        const end = this.end || now;
        return end.diff(now);
    }

    updateTime (time) {
        let reminingString = '';

        const remining = moment.duration(time);

        if (time > 0) {
            const daysTitle = declOfNum(remining.days(), ['день', 'дня', 'дней']);
            const hoursTitle = declOfNum(remining.hours(), ['час', 'часа', 'часов']);

            const format = `
                [<span class="marker">]D[</span>] ${daysTitle} 
                [<span class="marker">]H[</span>] ${hoursTitle} 
                [<span class="marker minutes">]mm[</span>] мин 
                [<span class="marker seconds">]ss[</span>] сек
            `;

            // [<span class="marker">]ss[</span>] сек

            reminingString = remining.format(format);
        } else {
            reminingString = 'марафон уже прошёл';
        }
        
        $('#marathon-date').html(reminingString);
    }

    tick () {
        const duration = this.duration();

        if (duration < 0) {
            clearInterval(this.interval);
        } else {
            this.updateTime(duration);
        }
    }

    start () {
        this.end = moment(this.marathonDate);

        const duration = this.duration();

        if (duration >= 0) {
            this.updateTime(duration);
            this.interval = setInterval(() => this.tick(), 1000);
        }
    }
}

export default Counter;
