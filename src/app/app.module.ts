import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectsRegistryComponent } from './components/subjects-registry/subjects-registry.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsRegistryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
