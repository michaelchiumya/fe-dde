import { Component } from '@angular/core';
import { MegaMenuItem,MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dde-fe';
  items: MenuItem[] = [];

    ngOnInit() {
      this.items = [
        {
          label:'Home',
          icon:'pi pi-fw pi-home',
          url: 'home'
        },
        {
          label:'Artists',
          icon:'pi pi-fw pi-user-minus',
          items:[
            {
              label:'Signed',
              icon:'pi pi-fw pi-id-card',
              items:[
                {
                  label:'Bookmark',
                  icon:'pi pi-fw pi-bookmark'
                },
                {
                  label:'Video',
                  icon:'pi pi-fw pi-video'
                },

              ]
            },

            {
              separator:true
            },
            {
              label:'Explore',
              icon:'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label:'Store',
          icon:'pi pi-fw pi-shopping-cart',
          items:[
            {
              label: 'Music',
              icon: 'pi pi-fw pi-volume-up'
            },
            {
              icon:'pi pi-fw pi-tags',
              label:'Merch'
            },
            {
              icon:'pi pi-fw pi-tag',
              label:'Freebies'
            }
          ]
        },
        {
          label:'Videos',
          icon:'pi pi-fw pi-video',
          items:[
            {
              label:'Youtube',
              icon:'pi pi-fw pi-youtube',
            }
          ]
        },
        {
          label:'Blog',
          icon:'pi pi-fw pi-user'
        },
        {
          label:'User Account',
          icon:'pi pi-fw pi-user',
          url: 'login'
        }
      ]
    }

  mainSearch($event: MouseEvent) {
    alert("search not implemented !");
  }
}


