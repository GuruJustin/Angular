import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnInit {
  
  @Input() major!:number;
  @Input() minor!:number;
  
  changeLog: string[]=[];

  ngOnChanges(changes : SimpleChanges) {
    const log : string[]= [];
    for (const propName in changes) {
      const changedProp = changes[propName]
      const to = JSON.stringify(changedProp.currentValue)

      if(changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`)
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`)
      }
    }

    this.changeLog.push(log.join(', '))
  }

  constructor() { }


  ngOnInit(): void {
  }

}
