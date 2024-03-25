import { features } from "process";

function storecarinfo(manufacturer:string, modelname:string, ...extraoption: {[key : string]: any} []) :object {

    const carinfo = {
        manufacturer,
        modelname,
        ...Object.assign({}, ...extraoption)
    }

    return carinfo;
} 

let answer = storecarinfo('honda', 'civic', {color:'black'}, {features: ['navigation','power window']})
console.log(answer);

