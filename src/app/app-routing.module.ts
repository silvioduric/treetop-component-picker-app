import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPickerComponent } from './component-picker/component-picker.component';
import { ComponentDetailViewComponent } from './component-detail-view/component-detail-view.component';

const routes: Routes = [
  { path: 'componentPicker', component: ComponentPickerComponent },
  { path: 'detailView', component: ComponentDetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
