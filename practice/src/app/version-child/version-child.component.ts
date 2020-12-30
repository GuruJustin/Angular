import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnInit {

  messages : String[] = []
  @Input() minor! : number;
  @Input() major! : number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges) {
    const log: string[] = []
    for (const propName in changes) {
      const changedProp = changes[propName]
      const to = JSON.stringify(changedProp.currentValue)

      if(changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`)
      } else {
        const from = JSON.stringify(changedProp.previousValue)
        log.push(`${propName} changed from ${from} to ${to}`)
      }
    }
    this.messages.push(log.join(','))
  }
}
