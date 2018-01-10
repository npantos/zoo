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
    sector_name;
    surface;
    sectors: Array<object>;
    day_of_birth;

    constructor() {

        this.sectors = [
            new Sector('sektor 1', 'Grass'),
            new Sector('sektor 2', 'Dirt'),
            new Sector('sektor 3', 'Concrete')
        ];

        this.animals = [
            new Animal('Lion', 'Cat', '12.11.2010.', this.sectors[0]),
            new Animal('Tiger', 'Cat', '10.10.2000.', this.sectors[1]),
            new Animal('Puma', 'Cat', '101.01.2011.', this.sectors[0]),
            new Animal('Eagle', 'Bird', '13.09.2000.', this.sectors[2]),
            new Animal('Polar Bear', 'Bear', '02.02.2005.', this.sectors[1]),
            new Animal('Brown Bear', 'Bear', null, this.sectors[1])
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
        this.animals.push(new Animal(this.name, this.type, this.day_of_birth, this.sectors[this.sector]));
        console.log(this.animals);
    }

    addSector() {
        this.sectors.push(new Sector(this.sector_name, this.surface));
        console.log(this.sectors);
    }

    sectorPopUp(sector) {
        const filteredNames = [];
        this.animals.filter(function (animals) {
            if (animals['sector'] === sector) {
                filteredNames.push(animals['name']);
            }
        });
        alert(filteredNames);
    }

}
