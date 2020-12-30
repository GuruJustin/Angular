import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent implements OnInit {

  @Input()
  get name() { return this._name }
  set name(name : string) {
    this._name = name ? name : 'Sorry no name'
  }
  private _name! : string

  constructor() { }

  ngOnInit(): void {
  }
}
