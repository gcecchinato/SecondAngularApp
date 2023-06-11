import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { artikelComponent } from './artikel/artikel.component';

import { verbenComponent } from './verben/verben.component';

const routes: Routes = [
  { path: 'artikel', component: artikelComponent },
  { path: 'verben', component: verbenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

