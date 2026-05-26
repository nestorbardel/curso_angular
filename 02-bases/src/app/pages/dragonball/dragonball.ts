import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball.html',
})
export class Dragonball {
  name = signal<string>('Gohan');
  power = signal<number>(100);

  resumen = computed(() => {
    return `${this.name()} - ${this.power()}`;
  });
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 3000,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500,
    },
  ]);

  AddCharacter() {
    console.log(this.resumen());
  }

  // powerClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
