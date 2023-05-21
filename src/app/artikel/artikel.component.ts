import { Component } from '@angular/core';
import woerter from './woerter.json';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class artikelComponent{
  title = 'json-file-read-angular';
  public wortList:{artikel:string, wort:string, plural:string, bedeutung:string}[] = woerter;
  public next = Math.floor(Math.random() * this.wortList.length);
  clickMessage = this.wortList[this.next].wort;
  onClickDer() {
    this.getNext("der");
  }
  onClickDie() {
    this.getNext("die");
  }
  onClickDas() {
    this.getNext("das");
  } 
  getNext(artikel:string)
  {
    if(artikel.toLowerCase() != this.wortList[this.next].artikel.toLowerCase())
      return;
    this.next = Math.floor(Math.random() * this.wortList.length);
    this.clickMessage = this.wortList[this.next].wort;
  }
}
