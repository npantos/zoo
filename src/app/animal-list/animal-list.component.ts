import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';
import {Sector} from '../sector';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

    animals: Array<object>;
    name;
    type;
    sector;
    day_of_birth;
    sector1 = new Sector('sektor 1', 'Grass');
    sector2 = new Sector('sektor 2', 'Dirt');
    sector3 = new Sector('sektor 3', 'Concrete');

    constructor() {


        this.animals = [
            new Animal('Lion', 'Cat', '12.11.2010.', this.sector1.name),
            new Animal('Tiger', 'Cat', '10.10.2000.', this.sector1.name),
            new Animal('Puma', 'Cat', '101.01.2011.', this.sector2.name),
            new Animal('Eagle', 'Bird', '13.09.2000.', this.sector2.name),
            new Animal('Polar Bear', 'Bear', '02.02.2005.', this.sector3.name),
            new Animal('Brown Bear', 'Bear', null, this.sector3.name)
        ];
    }

    ngOnInit() {
    }

    removeAnimal(animal) {
        console.log(animal);
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }

    moveOnTop(animal) {
        console.log(animal);
        const index = this.animals.indexOf(animal);

        this.animals.splice(index, 1);
        this.animals.splice(0, 0, animal);
    }

    addAnimal() {
        this.animals.push(new Animal(this.name, this.type, this.day_of_birth));
    }

}
