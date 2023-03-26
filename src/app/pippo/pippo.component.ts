import { Component } from '@angular/core';

import jsontest from './jsontest.json';
import woerter from './woerter.txt';



@Component({
  selector: 'app-pippo',
  templateUrl: './pippo.component.html',
  styleUrls: ['./pippo.component.css']
})
export class PippoComponent{
  clickMessage = '';
    title = 'json-file-read-angular';

  // public countryList:{name:string, code:string}[] = woerter;

  onClickDer() {
    this.clickMessage = 'Der';
    // this.clickMessage = jsontest;

    // this.readFile();
  }
  onClickDie() {
    this.clickMessage = 'Die';
    this.clickMessage = jsontest;
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
