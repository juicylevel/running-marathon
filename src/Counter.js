import $ from 'jquery';
import moment from 'moment';
import 'moment-duration-format';
import { declOfNum } from './utils';

class Counter {
    constructor () {
        this.end = null;
        this.time = null;
        this.marathonDate = '2018-05-13T11:00';
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
            const format = `D ${daysTitle} H ${hoursTitle} mm мин ss сек`;

            reminingString = remining.format(format);
        } else {
            reminingString = 'марафон уже прошёл';
        }
        
        $('#marathon-date').text(reminingString);
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