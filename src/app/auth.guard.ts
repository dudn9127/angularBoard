import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd} from '@angular/router';
import { Observable} from 'rxjs';
import { HttpParams} from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate{

  previousUrl: string | undefined;
  constructor(
    private router: Router,
  ){
    /*this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.previousUrl = event.url;
      }
    });*/
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    const currentUrl = this.router.url;


    console.log('execute guard');
    // const currentUrl = this.router.url.split('/');
    // console.log('current ' + currentUrl);
    // console.log('previous ' + this.previousUrl);
    const random = this.getRandomInt(0, 100);
    console.log('Random Value: ' + random);
    if (random % 2 === 0){
      return true;
    }
    else{
      alert('incorrect access!');
      this.router.navigate([''], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
  // tslint:disable-next-line:typedef
  private getRandomInt(min: number, max: number){
    return Math.floor(Math.random() * (max - min) + min);
  }


}
