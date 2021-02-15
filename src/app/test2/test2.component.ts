import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


const array: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  title = 'pipe';
  public currentTime = new Date();
  constructor(private router: Router) {
  }

  public getTime(): void{
    // this.currentTime = new Date();
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }


  public clickAfterPrint(): void{
    this._innerFunc();
    console.log(array);
    console.log(this.title);
  }

  // tslint:disable-next-line:typedef
  private _innerFunc() {
    array.push('data' + array.length);
  }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    this.getTime();
    console.log(currentUrl);
  }

}
