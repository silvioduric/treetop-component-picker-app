import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPickerComponent } from './component-picker/component-picker.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentDetailViewComponent } from './component-detail-view/component-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPickerComponent,
    ComponentListComponent,
    ComponentDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
