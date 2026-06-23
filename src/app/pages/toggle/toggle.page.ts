import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'warning',
      selected: false
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'dark',
      selected: false
    },
    {
      name: 'medium',
      selected: false
    },
    {
      name: 'light',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check) {
    console.log(check);
  }

}
