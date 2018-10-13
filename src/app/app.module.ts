import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DataService } from './servicios/data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './home/pokemon/pokemon.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { DetallesComponent } from './home/detalles/detalles.component';

const appRoutes: Routes=[

  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,

      children:[
        {path: 'pokemon', component: PokemonComponent},
        {path: 'navbar', component: NavbarComponent},
        {path: 'detalles',component: DetallesComponent}
       
      ]

  },
 
 
 
    

  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    NavbarComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      appRoutes,
      {enableTracing:true}
 
      )
  ],
  providers: [
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
