import { Component } from '@angular/core';
import woerter from './woerter.json';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class artikelComponent{
  title = 'json-file-read-angular';
  public wortList:{artikel:string, wort:string, plural:string, bedeutung:string, counter:number}[] = woerter;
  public next = Math.floor(Math.random() * this.wortList.length);
  clickMessage = this.wortList[this.next].wort;
  consecutives = 0;
  counterMessage = 0;
  onClickDer() {
    this.CheckAnswerAndGetNext("der");
  }
  onClickDie() {
    this.CheckAnswerAndGetNext("die");
  }
  onClickDas() {
    this.CheckAnswerAndGetNext("das");
  } 
  CheckAnswerAndGetNext(artikel:string)
  {
    if(artikel.toLowerCase() != this.wortList[this.next].artikel.toLowerCase())//if is wrong
    {
      this.consecutives = 0;
      this.wortList[this.next].counter -=1
      return;
    }
    else
    {
      this.wortList[this.next].counter +=1;
      this.consecutives++;

      for (let i = 0; i < 20; i++) 
      {
        this.next = Math.floor(Math.random() * this.wortList.length);

        if (typeof this.wortList[this.next].counter === "undefined")
        {
          this.wortList[this.next].counter = 0;
        }

        if(this.wortList[this.next].counter < 3)
        {
          this.clickMessage = this.wortList[this.next].wort;
          break;
        }
      }
    }
    this.counterMessage = this.consecutives;
  }

}
