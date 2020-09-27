import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'displaydata',
    component: DisplaydataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
