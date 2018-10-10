import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable}       from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class MyCurrencyService {  //for BTC
    symbol: string;
    constructor(private http: Http,
                private route: ActivatedRoute
    ) { 
        route.params.forEach(params=>{
            this.symbol = params['symbol']
            console.log(this.symbol);
        })
    }

    getAllCurrencyPrices(): Observable<string[]> {
        let dataUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'; 
        return this.http.get(dataUrl)
       .pipe(map(this.extractData),
        catchError(this.handleError.bind(this)))
    }

    // Notice how BTC is hard-coded in the URL below. Hint: We might need a parameter 
    // which can be used to dynamically adjust the URL. 
    getCurrencyDetail(routeValue, active): Observable<string[]> {
        if(active) this.symbol = routeValue;
        let url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.symbol}&tsym=USD&limit=1`
        let FINAL_TIME = 1;
        return this.http.get(url)
        .pipe(map(this.extractData),
         catchError(this.handleError.bind(this)))
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        throw(error);
    }
}
