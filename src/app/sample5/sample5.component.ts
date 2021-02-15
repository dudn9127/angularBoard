import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SampleService } from '../service/sample.service';
import {SampleVO} from '../VO/sampleVO';

@Component({
  selector: 'app-sample5',
  templateUrl: './sample5.component.html',
  styleUrls: ['./sample5.component.css']
})
export class Sample5Component implements OnInit, OnChanges{

  public sample = new SampleVO();
  public sampleList = [];

  // @input을 이용한 데이터 교환
  @Input()
  sampleInput?: SampleVO;

  constructor(private sampleService: SampleService) {
    // subscribe를 이용한 데이터 교환
    this.sampleService.changeSample.subscribe(data => {
      this.sample = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    this.sampleList.push(this.sampleInput);
    // alert(this.sampleInput.id);
  }

  ngOnInit(): void {
  }

}
