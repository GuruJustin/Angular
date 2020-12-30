import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Nacro', 'Celetriaos',"Heyehya"]

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++
  }
}
