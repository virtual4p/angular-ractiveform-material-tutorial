import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material-components/material-components.module';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
