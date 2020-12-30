import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Input() name! : string
  @Output() voted = new EventEmitter<boolean>()
  didvote = false

  constructor() { }

  ngOnInit(): void {
  }

  vote(agreed : boolean) {
    this.voted.emit(agreed)
    this.didvote = true
  }
}
