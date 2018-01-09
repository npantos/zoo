import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<object>;

  constructor() {
      this.animals = [
          {
              name: 'Lion',
              type: 'Cat',
              day_of_birth: '12.11.2010.'
          },
          {
              name: 'Tiger',
              type: 'Cat',
              day_of_birth: '10.10.2000.'
          },
          {
              name: 'Puma',
              type: 'Cat',
              day_of_birth: '01.01.2011.'
          },
          {
              name: 'Eagle',
              type: 'Bird',
              day_of_birth: '13.09.2000.'
          },
          {
              name: 'Polar Bear',
              type: 'Bear',
              day_of_birth: '02.02.2005.'
          },
          {
              name: 'Brown Bear',
              type: 'Bear'
          }
      ];


  }

  ngOnInit() {
  }

    removeAnimal(animal){
        console.log(animal);
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }

}
