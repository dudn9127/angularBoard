import {Component, Input, OnInit, Output, SimpleChange} from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sample6',
  templateUrl: './sample6.component.html',
  styleUrls: ['./sample6.component.css']
})
export class Sample6Component implements OnInit {

  @Input()
  public name?: string;

  @Output()
  public sendObject = new EventEmitter<string[]>();

  public nameList = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(changes: SimpleChange): void {
    alert('changes');
    console.log('changes: ' + changes);
  }

 onClick(): void{
    // @ts-ignore
   this.nameList?.push(this.name);
   this.sendObject.emit(this.nameList);
   console.log('namelist:' + this.nameList);
 }

}
