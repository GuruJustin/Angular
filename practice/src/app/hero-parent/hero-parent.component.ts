import { Component, OnInit } from '@angular/core';

import { Hero, HEROS} from '../hero'

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {

  heros : Hero[] = HEROS
  master : string = 'Beyond Guru'
  constructor() {
  }

  ngOnInit(): void {
  }
}
