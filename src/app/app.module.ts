import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentListComponent } from './incidents/incident-list/incident-list.component';
import { IncidentItemComponent } from './incidents/incident-list/incident-item/incident-item.component';
import { IncidentDetailsComponent } from './incidents/incident-details/incident-details.component';
import { SnoozeButtonComponent } from './snooze/snooze-button/snooze-button.component';
import { StopPropagationDirective } from './stop-propagation.directive';
import { FoldersComponent } from './folders/folders.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncidentsComponent,
    IncidentListComponent,
    IncidentItemComponent,
    IncidentDetailsComponent,
    SnoozeButtonComponent,
    StopPropagationDirective,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
