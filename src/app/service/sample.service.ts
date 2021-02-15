import {Injectable} from '@angular/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
import { SampleVO} from '../VO/sampleVO';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampleService{

   private subject = new Subject<SampleVO>();
   public changeSample = this.subject.asObservable();

  constructor() {
  }

  public sendSample(value: SampleVO): void{
    this.subject.next(value);
  }

}
