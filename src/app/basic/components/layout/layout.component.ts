import { Component,OnInit } from '@angular/core';


interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

interface Animal{
  name: string;
  raza: string;
  edad: number;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  title = 'holanuevo';
  name = 'nicolas';

  rockbans: string[] = ['nirvana', 'los cabesones'];
ngOnInit(){}
  users: User[] = [
    {
      name: 'nicolas',
      age: 26,
      isSingle: false,
      avatar: 'assets/images/5456.jpg',
    },

    {
      name: 'julian',
      age: 59,
      isSingle: true,
      avatar: 'assets/images/5456.jpg',

    }

  ];

  animals: Animal[] = [
    {
      name: 'Smith',
      raza: 'Doberman',
      edad: 3,
    }
    ,
    {
      name: 'Nicolas',
      raza: 'Chihuuga',
      edad: 5,
    }
  ];

  rockbanName = '';

  changeTitle() {
    this.title = 'hola a esta primera clase';
  }
  
  addRockBand() {
    this.rockbans.unshift(this.rockbanName);
    this.rockbanName = '';
  }

  empty() {
    this.rockbans = [];
  }

  deleteItem(index: number) {
    this.rockbans.splice(index, 1);//index -> para el indice del array, 1 -> cantidad de datos a borrar
  }

  updateItem(index: number) {
    this.rockbans[index] = this.rockbanName;//'se cambio';
  }


}
