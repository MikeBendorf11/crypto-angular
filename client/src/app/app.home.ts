import { Component } from '@angular/core';
import { MyCurrencyService } from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({

    template: `
                
                <ul id="coinList">
                    <li *ngFor="let crcy of currencyArray; index as i">
                    <a routerLink="/detail/{{crcy.name}}/{{crcy.symbol}}/{{i}}/{{currencyArray[i].price}}" routerLinkActive="active">{{crcy.name}}</a>
                    
                    <span> <b>{{crcy.symbol}}</b> </span>   
                    <span> {{ crcy.price | currency:'USD'  }} USD <app-trend [index]=i></app-trend></span>
                    
                    </li>
                    
                </ul>`,

    providers: [MyCurrencyService]
})

export class HomeComponent {
    name: String;
    currencyArray: Array<CryptoCurrencyType>;
    
    constructor(private currencyService: MyCurrencyService) {
        // Store local reference to MyDataService.
        this.currencyArray = coinList;
        this.getSomeData();
        
    }

    // getCoinArrayIndex(abbreviation) {
    //     for (var i = 0; i < this.currencyArray.length; i++) {
    //         if (this.currencyArray[i].symbol == abbreviation) {
    //             return i;
    //         }
    //     }
    // }
    
    getSomeData() {
        this.currencyService.getAllCurrencyPrices()
            .subscribe(
                data => {

                    //console.log(JSON.stringify(data));
                    for (var i = 0; i < this.currencyArray.length; i++) {

                        let currentSymbol = this.currencyArray[i].symbol;
                        //let idx           = this.getCoinArrayIndex(currentSymbol);
                        this.currencyArray[i].price = data[currentSymbol].USD; //changed idx to i
                    }
                },
                // 2. Handle error.
                error => {
                    console.log(error)
                });
    }

}

