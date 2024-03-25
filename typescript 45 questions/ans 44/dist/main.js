"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storecarinfo(manufacturer, modelname, ...extraoption) {
    const carinfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extraoption));
    return carinfo;
}
let answer = storecarinfo('honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
