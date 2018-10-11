import { Component } from '@angular/core';
import { NameService } from './app.nameService';

@Component({
    selector: 'app-root',
    templateUrl:'app.component.html',
             providers: [NameService]
})
export class AppComponent {
    name: String;
    constructor( nameService: NameService) {
        this.name = nameService.name;
    }
}

