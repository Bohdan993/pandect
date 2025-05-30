class Observer {
    constructor() {
        this.handlers = []; // observers
        this.ready = false;
    }
    subscribe(fn) {
        this.handlers.push(fn);
    }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
    fire(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
    clear(){
        this.handlers = [];
    }
}



export let grecaptchaObserver = new Observer();