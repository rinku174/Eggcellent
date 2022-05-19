import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './mycompnent/layout/header/header.component';
import { FooterComponent } from './mycompnent/layout/footer/footer.component';
import { FaqComponent } from './mycompnent/layout/faq/faq.component';
import { FormComponent } from './mycompnent/layout/form/form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AnimationComponent } from './mycompnent/layout/animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    FormComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
