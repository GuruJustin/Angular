import { Component, OnInit } from '@angular/core';

import { Hero, HEROS} from '../hero'
import { HeroChildComponent } from '../hero-child/hero-child.component'

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {
  heros!: Hero[]
  master: String = "Guru"
  constructor() { 
    this.heros= HEROS
  }

  ngOnInit(): void {
  }
}
