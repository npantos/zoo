import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

    animals: Array<object>;
    name;
    type;
    day_of_birth;

    constructor() {

        this.animals = [
            new Animal('Lion', 'Cat', '12.11.2010.'),
            new Animal('Tiger', 'Cat', '10.10.2000.'),
            new Animal('Puma', 'Cat', '101.01.2011.'),
            new Animal('Eagle', 'Bird', '13.09.2000.'),
            new Animal('Polar Bear', 'Bear', '02.02.2005.'),
            new Animal('Brown Bear', 'Bear')
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
