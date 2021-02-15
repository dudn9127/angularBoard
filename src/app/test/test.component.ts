import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  firstName2?: string;
  lastName2?: string;
  fullName = '';
  public nameList?: string[];

  onClick(): void{
    // this.fullName = this.firstName2 + ' ' + this.lastName2;
    // this.firstName2 += ' - ';
  }

  upDateList(value: string[]): void{
    this.nameList = value;
  }

  ngOnInit(): void {
  }

}
