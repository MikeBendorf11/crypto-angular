import { Component }                    from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import {  MyCurrencyService } from './app.currencyservice';
import { NameService } from './app.nameService';

@Component({
    template: `Welcome {{name}}
    <img src='https://www.cryptocompare.com/media/19633/btc.png' >
    <br/><br/>

    <!-- Draw up and down arrows -->
    &uarr; &darr;
    `,
    providers: [MyCurrencyService, NameService]
})
export class DetailComponent { 
    name: string;
    // The constructor sets up the class.
    // Defining private parameters for services in the constructor initializes instances
    // for the entire class.
    constructor(private route: ActivatedRoute, 
                private currencyService:MyCurrencyService, 
                nameService: NameService) {
        this.name = nameService.name;
    }

    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID = params['symbol'];
            //console.log(localID);
            this.getCurrencyInformation();
        });
    }

    getCurrencyInformation() {
        this.currencyService.getCurrencyDetail()
        .subscribe(
            // 1. Handle successful data.
            data => {

                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                //console.log(JSON.stringify(data));
                let FINAL_UPDATE = 1;
                let priceInfo    = data["Data"][FINAL_UPDATE];
                let open  = priceInfo.open;
                let close = priceInfo.close;
                //console.log("Low: " + priceInfo.low + "   High: " + priceInfo.high);
            },
            // 2. Handle error.
            error => {
                //console.log(error)
            });
    }
}
