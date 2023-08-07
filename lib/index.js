"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    static success(msg) {
        console.log(`%c ${msg}`, 'color: green');
    }
    static danger(msg) {
        console.log(`%c ${msg}`, 'color: green');
    }
    static info(msg) {
        console.log(`%c ${msg}`, 'color: blue; background: black');
    }
}
exports.Log = Log;
