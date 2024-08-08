import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopsComponent } from './loops/loops.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CounterComponent,
    IfElseComponent,
    LoopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
