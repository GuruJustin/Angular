import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent implements OnInit {
  @Input()
  get name():String { return this._name }
  set name(name : String) {
    this._name = (name && name.trim()) || 'no name setted'
  }
  private _name='';

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.name)
  }
}