import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pippo',
  templateUrl: './pippo.component.html',
  styleUrls: ['./pippo.component.css']
})
export class PippoComponent {

  clickMessage = '';

  onClickDer() {
    this.clickMessage = 'Der';
  }
  onClickDie() {
    this.clickMessage = 'Die';
  }
  onClickDas() {
    this.clickMessage = 'Das';
  }
}
