import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TransaccionService } from 'src/app/servicios/transaccion.service';
import { Ticker } from 'src/app/modelos/Ticker';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @Input() ticker: Ticker;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
     this.transaccionService.getJson().subscribe((res: any) => {
      console.log(res);
    });
    // this.transaccionService.getTicker();

  }
  }


