import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heros'


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

export class HerosComponent implements OnInit {
  heros = HEROES;
  selectedHero!: Hero | undefined;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.heros)
  }

}
