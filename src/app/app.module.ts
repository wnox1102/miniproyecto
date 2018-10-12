import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './home/pokemon/pokemon.component';
import { NavbarComponent } from './home/navbar/navbar.component';

const appRoutes: Routes=[

  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,

      children:[
        {path: 'pokemon', component: PokemonComponent},
        {path: 'navbar', component: NavbarComponent}
       
      ]

  },
 
 
 
    

  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      appRoutes,
      {enableTracing:true}
 
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
