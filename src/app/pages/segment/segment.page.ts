import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('mainSegment') segment: IonSegment;

  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = '';
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event) {

    const segmentValue = event.detail.value;
    console.log('Segment value:', segmentValue);
  }

}
