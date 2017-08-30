import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncidentsComponent} from "./incidents/incidents.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/incidents/active', pathMatch: 'full' },
  { path: 'incidents/:folderId', component: IncidentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
