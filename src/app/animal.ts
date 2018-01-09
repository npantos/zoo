export class Animal {

    name;
    type;
    day_of_birth;
    sector;

    constructor(name: string, type: string, day_of_birth: string = null, sector: object = null) {
        this.name = name;
        this.type = type;
        this.day_of_birth = day_of_birth;
        this.sector = sector;
        return this;
    }
}
