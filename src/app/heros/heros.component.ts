import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

export class HerosComponent implements OnInit {
  heros : Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  getHeros() : void {
    this.heroService.getHeros().
      subscribe(heros => this.heros = heros)
  }

  ngOnInit(): void {
    this.getHeros()
  }
}