import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

 
  poke : Array<any>;
  id: number;
  

  constructor(public servicio:DataService) {


    this.poke = servicio.getPokemones();
    this.id= servicio.id;
    
   }


  ngOnInit() {
  }

}
