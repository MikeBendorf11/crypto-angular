import { Component }                    from '@angular/core';
import {  MyCurrencyService }           from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import{NameService} from './app.nameService';

@Component({
    
    template: ` Welcome {{name}}
                <ul>
                    <li *ngFor="let crcy of currencyArray">
                    <a routerLink="/detail/{{crcy.symbol}}" routerLinkActive="active">{{crcy.name}}</a>
                    {{crcy.name}}
                    {{crcy.symbol}}   
                    {{ crcy.price  }}
                    </li>
                </ul>`,

    providers: [MyCurrencyService, NameService]
})

export class HomeComponent {
    name: String;
    currencyArray: Array<CryptoCurrencyType>;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private currencyService: MyCurrencyService, nameService: NameService) {
        // Store local reference to MyDataService.
        this.currencyArray  = coinList;
        this.getSomeData();
        this.name = nameService.name;
    }

    getCoinArrayIndex(abbreviation) {
        for(var i=0; i<this.currencyArray.length; i++) {
            if(this.currencyArray[i].symbol == abbreviation) {
                return i;
            }
        }
    }

    getSomeData() {
        this.currencyService.getAllCurrencyPrices()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // 1. Handle successful data retrieval.
            data => {

                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                //console.log(JSON.stringify(data));

                // Set the price for each item.
                for(var i=0; i<this.currencyArray.length; i++) {

                    // Get the index for each item in the array and assign the price.
                    let currentSymbol = this.currencyArray[i].symbol;
                    let idx           = this.getCoinArrayIndex(currentSymbol); //necessary??
                    this.currencyArray[idx].price = data[currentSymbol].USD; //changed idx to i same price
                }     
            },
            // 2. Handle error.
            error => {
                //console.log(error)
            });
    }
}

