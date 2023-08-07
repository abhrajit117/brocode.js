export class log{
    static success(msg: string){
        console.log(`%c ${msg}`, 'color: green');
    }

    static danger(msg: string){
        console.log(`%c ${msg}`, 'color: green');

    }

    static info(msg: string){
        console.log(`%c ${msg}`, 'color: blue; background: black');

    }
}