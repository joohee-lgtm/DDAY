import {HOUR_UNIT, MINUTE_UNIT, SECOND_UNIT} from './util';
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
        this.hide();
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

    show() {
        this.root.style.display = '';
    }

    hide() {
        this.root.style.display = 'none';
    }

    renderSelectArea() {        
        const makeOption = (unitCount) => {
            return new Array(unitCount).fill('').map((item, index) => 
            `<option value=${index}>${index}</option>`);
        }
        const template = `
            <input name="date" type="date"></input>
            <select name="hour">${makeOption(HOUR_UNIT)}</select>
            <select name="minute">${makeOption(MINUTE_UNIT)}</select>
            <select name="second">${makeOption(SECOND_UNIT)}</select>
        `;

        this.root.innerHTML = template;
    }

    bindSelect() {
        this.dateInput = this.root.querySelector('[name="date"]');
        this.hourInput = this.root.querySelector('[name="hour"]');
        this.minuteInput = this.root.querySelector('[name="minute"]');
        this.secondInput = this.root.querySelector('[name="second"]');
    }
}

export default Calendar;
