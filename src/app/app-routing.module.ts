import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { GenericFormViewComponent } from './generic-form-view/generic-form-view.component';

const routes: Routes = [
  {path: 'forms', component: FormsComponent},
  {path: 'generic-form/:param1', component: GenericFormViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
