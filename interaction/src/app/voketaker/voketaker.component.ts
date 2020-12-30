import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-voketaker',
  templateUrl: './voketaker.component.html',
  styleUrls: ['./voketaker.component.scss']
})
export class VoketakerComponent implements OnInit {

  @Input() name!: string
  @Output() voted = new EventEmitter<boolean>()
  didVote = false

  constructor() { }

  ngOnInit(): void {
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed)
    this.didVote = true;
  }
}
