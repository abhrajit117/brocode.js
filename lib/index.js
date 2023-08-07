"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
class log {
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
exports.log = log;
