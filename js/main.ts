abstract class Human {
    private _name: string;
    private _age: Number;

    constructor(name: string, age: Number) {
        this._name = name;
        this._age = age;
    }

    public getName(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
    }

    public getAge(): Number {
        return this._age;
    }

    public setAge(value: Number) {
        this._age = value;
    }

    info(): string {
        return (`name : ${this._name} age : ${this._age}`);
    }

}

interface say {
    sound(): void;
}


class Male extends Human implements say {
    private _organs: Array<Object>;

    constructor(name: string, age: number | Number, organs: Array<Object>) {
        super(name, age);
        this._organs = organs;
    }

    public getOrgans(): Array<Object> {
        return this._organs;
    }
    public setOrgans(value: Array<Object>) {
        this._organs = value;
    }
    info(): string {
        return this.getName() + ' ' + this.getAge() + ' ' + this._organs.toString();
    }

    sound(): void {
        console.log('i sound like consider');
    }

}
let Daneker = new Male('Daneker', 18, ['organ1', 'organ 2', 18]);
console.log(Daneker.info());
Daneker.sound();

