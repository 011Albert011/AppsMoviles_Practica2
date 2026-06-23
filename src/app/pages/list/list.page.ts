import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;
  usuarios: Observable<any[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite( user ) {
    console.log('favorite', user);
    if (this.lista) {
      this.lista.closeSlidingItems();
    }
  }

  share( user ) {
    console.log('share', user);
    if (this.lista) {
      this.lista.closeSlidingItems();
    }
  }
}
