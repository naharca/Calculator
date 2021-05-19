class Display {
    constructor(displayLastValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayLastValue = displayLastValue;
        this.calculation = new Calculator();
        this.operationType = undefined;
        this.actualValue = '';
        this.lastValue = '';
        this.signs = {
            add: '+',
            subtract:'-',
            multiply:'*',
            divide:'/',
        }
    }

    delete(){
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.actualValue = '';
        this.lastValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    compute(type){
        this.operationType !== 'equal' && this.calculate();
        this.operationType = type;
        this.lastValue = this.actualValue || this.lastValue;
        this.actualValue = '';
        this.printValues();

    }

    addNumber(number){
        if(number ==='.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString()+ number.toString();
        this.printValues();
    }

    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLastValue.textContent = `${this.lastValue} ${this.signs[this.operationType] || ''}`;

    }

    calculate(){
        const lastValue = parseFLoat(this.lastValue);
        const actualValue = parseFLoat(this.actualValue);

        if(isNAN(actualValue) || isNAN(lastValue) ) return
        this.actualValue = this.calculation[this.operationType](lastValue, actualValue);
    }
}