import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService{
  private id: string;
  private nickname: string;

  constructor() {
  }
}
