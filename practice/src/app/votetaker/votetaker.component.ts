import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent implements OnInit {

  agrees =0
  disagrees = 0

  voters = ['Nacro','Celebrits','Bombsto']

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agrees++ : this.disagrees++
  }
}
