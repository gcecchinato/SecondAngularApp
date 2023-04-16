import { Component } from '@angular/core';

import countries from './countries.json';
import woerter from './woerter.txt';



@Component({
  selector: 'app-pippo',
  templateUrl: './pippo.component.html',
  styleUrls: ['./pippo.component.css']
})
export class PippoComponent{
  clickMessage = '';
    title = 'json-file-read-angular';
    public countryList:{name:string, code:string}[] = countries;

  // public countryList:{name:string, code:string}[] = woerter;

  onClickDer() {
    this.clickMessage = 'Der';
  }
  onClickDie() {
    this.clickMessage = 'Die';
    this.clickMessage = this.countryList[0].name.toString();

  }
  onClickDas() {
    this.clickMessage = 'Das';
  }


  readFile()
  {
    // this.httpClient
    // .get('assets/woerter.txt', { responseType: 'text' })
    // .subscribe((data) => {
    //   console.log(data);
    // });

  }
}
