import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

export class HerosComponent implements OnInit {
  heros : Hero[] | undefined;
  selectedHero!: Hero | undefined;

  constructor(private heroService: HeroService, private messageService:MessageService) {
  }

  getHeros() : void {
    this.heroService.getHeros().
      subscribe(heros => this.heros = heros)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero Component: Selected hero id=${hero.id}`)
  }

  ngOnInit(): void {
    this.getHeros()
  }
}