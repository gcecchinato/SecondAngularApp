import { Component } from '@angular/core';
import woerter from './woerter.json';

@Component({
  selector: 'app-pippo',
  templateUrl: './pippo.component.html',
  styleUrls: ['./pippo.component.css']
})
export class PippoComponent{
  clickMessage = '';
    title = 'json-file-read-angular';
    public wortList:{artikel:string, wort:string, plural:string, bedeutung:string}[] = woerter;
    public iNext = 0;

  onClickDer() {
    this.getNext();
  }
  onClickDie() {
    this.getNext();
  }
  onClickDas() {
    this.getNext();
  } 

  getNext()
  {
    if(this.iNext++ > this.wortList.length)  
    {
      this.iNext = 0;
    }
    this.clickMessage = this.wortList[this.iNext++].wort;
  }
}
