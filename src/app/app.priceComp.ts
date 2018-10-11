import{Component, Input} from '@angular/core';
import { MyCurrencyService } from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({
  selector: 'app-trend',
  template: `<span [innerHTML]=trend></span>`,
  providers: [MyCurrencyService]
})

export class PriceComp {
  @Input()
  index: number;
  trend: string;
  currencyArray: Array<CryptoCurrencyType>;
  symbol: string;

  constructor(protected currencyService: MyCurrencyService){
    this.currencyArray = coinList;
    
  }
  ngOnInit(){
    this.symbol = this.currencyArray[this.index].symbol;
    this.currencyService.getCurrencyDetail(this.symbol, true)
    .subscribe(
      data=> {
        let FINAL_UPDATE = 1;
        let priceInfo = data["Data"][FINAL_UPDATE];                        
        if(priceInfo.close < priceInfo.open){
            this.trend ='<b>&#x2193;</b>';
        }
        else {
            this.trend = '<i>&#x2191;</i>';
        }              
      }, 
      error => {console.log(error)}
    )
  }
}