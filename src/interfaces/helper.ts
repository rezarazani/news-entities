export type Override<T1, T2> = Omit<T1, keyof T2> & T2;
export const Boolean = (value: any) => {
    if (typeof value == 'string') {
        if (value == 'true') {
            return true
        } else {
            return false
        }
    } else if (typeof value == 'boolean') {
        return value;
    }
    return value
}

export const PhonFormatter = (phoneNumber: string) => {
    if (!phoneNumber) return '';
    return `00${(+phoneNumber).toString()}`;
}

export const RoundNumber = (num: number, step: number) => {
    let p = precision(step);
    return +(Math.ceil(num / step) * step).toFixed(p);
}

let originalToLocaleString = Number.prototype.toLocaleString;
Number.prototype.toLocaleString = function(locales, options) {
    let str = originalToLocaleString.apply(this, arguments);
    if (locales && locales.includes('fa') && options && options.currency == 'IRR' && options.currencyDisplay == 'symbol') {
        let price = str.trim().replace('ریال', '').replace('−', '');
        if (str.includes('−')) {
            str = price.concat('− ریال').replace(/\u200e/g, "");
        } else {
            str = price.concat(' ریال').replace(/\u200e/g, "");
        }
    }
    return str;
}

function precision(a: number) {
    if (!isFinite(a)) return 0;
    var e = 1, p = 0;
    while (Math.round(a * e) / e !== a) { e *= 10; p++; }
    return p;
}