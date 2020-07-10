import { Component, OnInit } from '@angular/core';
import { TransaccionService } from './servicios/transaccion.service';
import { Ticker } from './modelos/Ticker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransaccionService]
})
export class AppComponent {
  ticker: any;
  constructor(private transaccionService: TransaccionService){}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    this.transaccionService.getJson().subscribe((res) => {
      console.log('Res', res);
      // tslint:disable-next-line: no-string-literal
      this.ticker = res['ticker']['max_bid'];
  });
  }
}
