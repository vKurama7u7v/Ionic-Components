import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(item: any) {
    console.log(item);
  }

  data = [
    {
      name: 'primary',
      selected: true,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: true,
    },
    {
      name: 'success',
      selected: true,
    },
  ];
}
