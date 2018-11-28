import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;
  typeValue: string;
  intervalRef;
  btnStatus = false;

  @Output() numberCounter = new EventEmitter<{counterNumber: number, numberType: string}>();

  constructor() { }

  ngOnInit() {
  }

  startIncrement() {
    this.btnStatus = true;
    this.intervalRef = setInterval(() => {
      this.counter++;
      this.typeValue = this.counter % 2 === 0 ? 'even' : 'odd';
      this.numberCounter.emit({counterNumber: this.counter, numberType: this.typeValue});
    }, 200);
  }

  stopIncrement() {
    this.btnStatus = false;
    clearInterval(this.intervalRef);
  }

}
