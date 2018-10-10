import { Component } from '@angular/core';
import { MyCurrencyService } from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { NameService } from './app.nameService';
import { ViewFlags } from '@angular/core/src/view';

@Component({

    template: ` Welcome {{name}}
                
                <ul>
                    <li *ngFor="let crcy of currencyArray; index as i">
                    <a routerLink="/detail/{{crcy.symbol}}/{{i}}/{{price}}" routerLinkActive="active">{{crcy.name}}</a>
                    <span> {{crcy.name}} </span>
                    <span> {{crcy.symbol}} </span>   
                    <span> {{ crcy.price | currency:'USD'  }} USD </span>
                    <app-trend [index]=i></app-trend>
                    </li>
                    
                </ul>`,

    providers: [MyCurrencyService, NameService]
})

export class HomeComponent {
    name: String;
    currencyArray: Array<CryptoCurrencyType>;
    
    constructor(private currencyService: MyCurrencyService, nameService: NameService) {
        // Store local reference to MyDataService.
        this.currencyArray = coinList;
        this.getSomeData();
        this.name = nameService.name;
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

