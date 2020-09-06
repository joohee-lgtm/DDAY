import Emittery from 'emittery';

class Calendar {
    constructor() {
        this.observer = new Emittery();
    }

    initialize(root) {
        if(!root) {
            return ;
        }

        this.root = root;
        this.renderSelectArea();
        this.bindSelect();
        this.trigger('init');
    }

    // private
    trigger(eventName) {
        this.observer.emit(eventName);
    }

    on(eventName, callback) {
        this.observer.on(eventName, callback);
    }

    off(eventName, callback) {
        this.observer.off(eventName, callback);
    }

    renderSelectArea() {        
        const template = `
            <input name="datetime" type="datetime-local"></input>
        `;

        this.root.innerHTML = template;
    }

    bindSelect() {
        this.datetimeInput = this.root.querySelector('[name="datetime"]');
    }


    getDateTime() {
        const value = this.datetimeInput.value;

        return new Date(value).getTime();
    }
}

export default Calendar;
