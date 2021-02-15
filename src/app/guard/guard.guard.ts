import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class SampleGuard implements CanActivate{
  isSample1 = true;

  constructor(private router: Router){

  }
  // @ts-ignore
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Guard called');
    if (this.isSample1) {
      return true;
    }
    console.log('fail');
    return false;
  }
}
