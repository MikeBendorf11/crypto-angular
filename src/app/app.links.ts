import { Component} from '@angular/core';


@Component({
  selector: 'app-links',
  template: `
  <a routerLink="/home" routerLinkActive="active">Home</a> |  
  <a routerLink="/about" routerLinkActive="active">About</a> |
  `,
  
})

export class LinksComponent{}