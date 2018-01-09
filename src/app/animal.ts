export class Animal {

    name;
    type;
    day_of_birth;

    constructor(name: string, type: string, day_of_birth: string = null) {
        this.name = name;
        this.type = type;
        this.day_of_birth = day_of_birth;
        return this;
    }
}
