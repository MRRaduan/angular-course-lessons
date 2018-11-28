import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameCounter = [];

  receiveCounter(counterObject: {counterNumber: number, numberType: string}) {
    this.gameCounter.push(
      {
        counterNumber: counterObject.counterNumber,
        numberType: counterObject.numberType
      }
    );
  }
}
