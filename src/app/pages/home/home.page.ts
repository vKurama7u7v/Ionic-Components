import { Component, OnInit } from '@angular/core';

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/datetime',
    },
    {
      icon: 'duplicate-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input',
    },
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list',
    },
    {
      icon: 'menu-outline',
      name: 'Menu',
      redirectTo: '/menu',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
