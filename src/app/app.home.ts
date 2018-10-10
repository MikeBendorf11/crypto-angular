import { Component } from '@angular/core';
import { MyCurrencyService } from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { NameService } from './app.nameService';
import { ViewFlags } from '@angular/core/src/view';

@Component({

    template: ` Welcome {{name}}
                <ul>
                    <li *ngFor="let crcy of currencyArray; index as i">
                    <a routerLink="/detail/{{crcy.symbol}}" routerLinkActive="active">{{crcy.name}}</a>
                    <span> {{crcy.name}} </span>
                    <span> {{crcy.symbol}} </span>   
                    <span> {{ crcy.price | currency:'USD'  }} USD </span>
                    <span [innerHTML]=trends[i]></span>
                    </li>
                    
                </ul>`,

    providers: [MyCurrencyService, NameService]
})

export class HomeComponent {
    name: String;
    currencyArray: Array<CryptoCurrencyType>;
    trends: string[];
    counter: number;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private currencyService: MyCurrencyService, nameService: NameService) {
        // Store local reference to MyDataService.
        this.currencyArray = coinList;
        this.getSomeMoreData()
        this.getSomeData();
        this.name = nameService.name;
        this.trends = [];
    }

    // getCoinArrayIndex(abbreviation) {
    //     for (var i = 0; i < this.currencyArray.length; i++) {
    //         if (this.currencyArray[i].symbol == abbreviation) {
    //             return i;
    //         }
    //     }
    // }
    getSomeMoreData() {
        this.currencyArray.forEach(elem => {
            this.currencyService.getCurrencyDetail(elem.symbol, true)
                .subscribe(
                    data => {
                        let FINAL_UPDATE = 1;
                        let priceInfo = data["Data"][FINAL_UPDATE];                        
                        if(priceInfo.close < priceInfo.open){
                            this.trends.push('&#x2193;');
                        }
                        else {
                            this.trends.push('&#x2191;');
                        }                        
                    },
                    error => {
                        console.log(error)
                    }
                )
        })
    }
    getSomeData() {
        this.currencyService.getAllCurrencyPrices()
            .subscribe(
                data => {

                    console.log(JSON.stringify(data));
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

