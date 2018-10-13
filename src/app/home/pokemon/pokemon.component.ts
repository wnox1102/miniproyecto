import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  poke : Array<any>;
  id: number;
  service: DataService;

  pasarP(id:number){
    this.service.cambiarID(id);
  }
  

  constructor(public servicio:DataService) {


    this.poke = servicio.getPokemones();
    this.service=servicio;
    
    
   }

  

  ngOnInit() {
    for(let i in this.poke){
      console.log(this.poke);
    }
  }

 /* pokedex: Array<Pokedex> = 
  [
    {
      "numero":1,
      "tipo":"tierra",
      "imagen":"pokemon1"
    },
    {
      "numero":2,
      "tipo":"agua",
      "imagen":"pokemon2"
    }, {
      "numero":3,
      "tipo":"relampago",
      "imagen":"pokemon3"
    }
    
  ]
  */
}
