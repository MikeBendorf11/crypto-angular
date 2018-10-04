import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
            
           <app-links></app-links>

            <!-- Where router should display a view -->
            <router-outlet></router-outlet>         
            <app-links></app-links>
             `,
})
export class AppComponent {}

