import {Component} from '@angular/core';

@Component({
  template: 
  `<p>Please enter your name here:</p>
  
    <input #nm="ngModel" [(ngModel)]="name" pattern="[a-zA-Z]*" minlength="2" value="{{name}}" required/>&nbsp;
    <input (click)="setKey(nm.value, nm.valid)" type="submit" />
    <br><br>
    <p #ap [hidden]="nm.valid || nm.pristine"> Minimum 2 characters and only alphabetical</p>
  
  `
})

export class AboutComponent {
  name: string;
  constructor(){
    var str = sessionStorage.getItem('name');
    if(str){
      this.name = str;
    } else {
      this.name = null;
    }
  }
  ngOnInit(){

  }
  setKey(name: string, valid: boolean){
    if(valid){
      sessionStorage.setItem('name', name);
      this.name = name;
      window.location.reload();
    }
    else{
      console.log('"' + name + '" Not a valid string');
    }

  }
}