import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheWelcomeComponent } from './the-welcome/the-welcome.component';
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenericFormViewComponent } from './generic-form-view/generic-form-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TheWelcomeComponent,
    FormsComponent,
    NavbarComponent,
    GenericFormViewComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
