import { Component, OnInit } from '@angular/core';
class Pokedex {
  numero: number;
  tipo: string;
  imagen: string;


}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pokedex: Array<Pokedex> = 
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
}
