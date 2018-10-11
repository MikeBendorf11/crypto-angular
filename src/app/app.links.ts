import { Component} from '@angular/core';


@Component({
  selector: 'app-links',
  template: `
  <a id="home" routerLink="/home" routerLinkActive="active">Home</a><span> | </span> 
  <a id="about" routerLink="/about" routerLinkActive="active">About</a> 
  `,
  
})

export class LinksComponent{}