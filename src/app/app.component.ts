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
          label:'Artists',
          icon:'pi pi-fw pi-file',
          items:[
            {
              label:'New',
              icon:'pi pi-fw pi-plus',
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
              label:'Delete',
              icon:'pi pi-fw pi-trash'
            },
            {
              separator:true
            },
            {
              label:'Export',
              icon:'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label:'Music',
          icon:'pi pi-fw pi-users',
          items:[
            {
              label:'Filter',
              icon:'pi pi-fw pi-filter',
              items:[
                {
                  label:'Print',
                  icon:'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon:'pi pi-fw pi-bars',
              label:'List'
            }
          ]
        },
        {
          label:'Videos',
          icon:'pi pi-fw pi-calendar',
          items:[
            {
              label:'Edit',
              icon:'pi pi-fw pi-pencil',
              items:[
                {
                  label:'Save',
                  icon:'pi pi-fw pi-calendar-plus'
                },
                {
                  label:'Delete',
                  icon:'pi pi-fw pi-calendar-minus'
                },

              ]
            },
            {
              label:'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items:[
                {
                  label:'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        },
        {
          label:'Login',
          icon:'pi pi-fw pi-power-off'
        }
      ]
    }

  }


