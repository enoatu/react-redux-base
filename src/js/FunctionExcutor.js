import { Functions } from './Functions.js';
export default class FunctionExcutor {
    constructor(value) {
        if (/^:/.test(value))  return this.etcCmd(value);
        if (/^\//.test(value)) return this.search(value);
    }
    etcCmd(value) {
       console.log(value.slice(1));
       const func = this.getFunction(Functions, value.slice(1));
       if (func === undefined) return alert("not found such a command");
       func();
    }
    getFunction(obj, query) {
        for (const key in obj) {
            const value = obj[key];
            if (key === query) {
                return obj[key];
            }
            if (typeof value === 'object') {
                let result = searchObj(value, query);
                if (result !== undefined) return result;
            }
        }
        return undefined;
    }
    search() {
        alert("search");
    }
}

