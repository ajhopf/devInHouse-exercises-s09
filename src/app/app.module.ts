import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectsRegistryComponent } from './components/subjects-registry/subjects-registry.component';
import { SendFormButtonComponent } from './components/send-form-button/send-form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsRegistryComponent,
    SendFormButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
