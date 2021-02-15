import {Component, Input, OnInit, Output} from '@angular/core';
import { SampleService} from '../service/sample.service';
import { Subscription} from 'rxjs';
import { ActivatedRoute, Params} from '@angular/router';
import { SampleVO} from '../VO/sampleVO';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.css']
})
export class Sample4Component implements OnInit {

  public id?: string;
  public nickname?: string;
  public sample = new SampleVO();

  /*@Output()
  sendObject = new EventEmitter<SampleVO>();*/

  constructor(private sampleService: SampleService) {
  }

  ngOnInit(): void {
  }

  onClick(): void{
    this.sample = new SampleVO();
    this.sample.id = this.id;
    this.sample.nickname = this.nickname;
    this.sampleService.sendSample(this.sample);
    // this.sendObject.emit(this.sample);
  }
}
