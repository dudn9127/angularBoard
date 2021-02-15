import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // const currentUrl = this.router.url;
    // console.log(currentUrl);
  }

}
