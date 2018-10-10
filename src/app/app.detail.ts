import { Component }                    from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import {  MyCurrencyService } from './app.currencyservice';
import { NameService } from './app.nameService';

@Component({
    templateUrl: 'app.detail.html',
    providers: [MyCurrencyService, NameService]
})
export class DetailComponent { 
    name: string;
    coinName: string;
    symbol: string;
    index: number;
    price: number;
    priceInfo: any;

    constructor(private route: ActivatedRoute, 
                private currencyService:MyCurrencyService, 
                nameService: NameService) {
        this.name = nameService.name;
    }

    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.symbol = params['symbol'];
            this.index = params['index'];
            this.price = params['price'];
            this.coinName = params['coinName']
            //console.log(localID);
            this.getCurrencyInformation();
        });
    }

    getCurrencyInformation() {
        this.currencyService.getCurrencyDetail(null, false)
        .subscribe(
            // 1. Handle successful data.
            data => {

                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                //console.log(JSON.stringify(data));
                let FINAL_UPDATE = 1;
                this.priceInfo    = data["Data"][FINAL_UPDATE];
                //console.log("Low: " + this.priceInfo.low + "   High: " + this.priceInfo.high);
            },
            // 2. Handle error.
            error => {
                //console.log(error)
            });
    }
}
