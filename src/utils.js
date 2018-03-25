import { isObject, isArray } from 'lodash';
import _isEmpty from 'lodash/isEmpty';

export const isEmpty = (value, allowEmptyString) => {
    if (isObject(value)) {
        return _isEmpty(value);
    }
    return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (isArray(value) && value.length === 0);
};

export const declOfNum = (number, titles) => {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[ (number % 10 < 5) ? number % 10 : 5 ] ];  
};