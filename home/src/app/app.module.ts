import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from './hero/hero.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule, RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
