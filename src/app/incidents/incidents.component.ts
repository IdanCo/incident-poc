import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../services/incident/incident.service';
import {Incident} from '../services/incident/incident.model';
import {SnoozeService} from '../services/snooze/snooze.service';
import {Folder} from "../folders/folders.model";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import incidents from "../services/fakend/incidents";

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  providers: [IncidentService, SnoozeService]
})
export class IncidentsComponent implements OnInit {
  selectedIncident: Incident;
  selectedFolder: string;
  incidents: Incident[];

  constructor(private incidentService: IncidentService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscribeToRoute();
    this.subscribeToSelectedIncident();
    this.subscribeToLiveIncidentsFeed();
  }

  subscribeToRoute() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.incidents = [];
          this.selectedFolder = params['folderId'];

          this.getIncidentsByFolder(this.selectedFolder);
        });
  }

  subscribeToSelectedIncident() {
    this.incidentService.incidentSelected
      .subscribe(
        (incident: Incident) => this.selectedIncident = incident
      );
  }

  subscribeToLiveIncidentsFeed() {
    this.incidentService.getLiveIncidentsFeed()
      .subscribe(
        incident => {
          console.info(incident);
          this.processNewIncident(incident);
        });
  }

  getIncidentsByFolder(folderId: string) {
    this.incidentService.getIncidentsByFolder(folderId)
      .subscribe(
        incidents => this.incidents = incidents
      );
  }

  processNewIncident(newIncident: Incident) {
    const oldIncidentIndex = this.incidents.findIndex(incident => incident.id === newIncident.id );
    const isIncidentValid = this.isIncidentValid(newIncident);

    if (oldIncidentIndex !== -1 && isIncidentValid) {
      this.updateIncident(oldIncidentIndex, newIncident);
    } else if (isIncidentValid) {
      this.addNewIncident(newIncident);
    } else if (oldIncidentIndex !== -1) {
      this.removeIncident(oldIncidentIndex);
    }
  }

  isIncidentValid(incident: Incident) {
    return incident.folder === this.selectedFolder;
  }

  addNewIncident(newIncident: Incident) {
    this.incidents.unshift(newIncident)
  }

  updateIncident(oldIncidentIndex: number, newIncident: Incident) {
    this.incidents[oldIncidentIndex] = newIncident;
  }

  removeIncident(incidentIndex: number) {
    this.incidents.splice(incidentIndex, 1);
  }

}
