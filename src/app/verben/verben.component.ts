import { Component } from '@angular/core';
import verben from './verben.json';

@Component({
  selector: 'app-verben',
  templateUrl: './verben.component.html',
  styleUrls: ['./verben.component.css']
})
export class VerbenComponent {
  public b = true;
  public verbenList:{verben:string}[] = verben;
  public next = Math.floor(Math.random() * this.verbenList.length);
  clickMessage = this.verbenList[this.next].verben;
  onClick() {
    this.getNext();
  }
  getNext()
  {
    var line = this.verbenList[this.next].verben;
    if(this.b)
    {
        this.clickMessage = line.split(' ')[0];
    }
    else
    {
      this.next = Math.floor(Math.random() * this.verbenList.length);
      
      this.clickMessage = line;
    }
    this.b = !this.b;


  }
}
