import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeComponent }  from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,	
	HomeComponent,	
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],

})



export class AppModule { }
