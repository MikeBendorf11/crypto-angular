import { Component} from '@angular/core';


@Component({
  selector: 'app-links',
  template: `
  <a routerLink="/home" routerLinkActive="active">Home</a> |  
  <a routerLink="/about" routerLinkActive="active">About</a> |
  <span>Welcome {{name}}!</span>
  `,
  
})

export class LinksComponent{
  name: string;
  constructor(){
    //this.name = serviceName.name;
    var str = sessionStorage.getItem('name');
    if(str){
      this.name = str;
      console.log(this.name);
    } else {
      this.name = null;
    }
  }
}