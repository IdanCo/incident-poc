import { Component, OnInit } from '@angular/core';
import {IncidentService} from './incident.service';
import {Incident} from './incident.model';
import {SnoozeService} from '../snooze/snooze.service';
import {Folder} from "../folders/folders.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  providers: [IncidentService, SnoozeService]
})
export class IncidentsComponent implements OnInit {
  selectedIncident: Incident;
  selectedFolder: string;

  constructor(private incidentService: IncidentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.incidentService.incidentSelected
      .subscribe(
        (incident: Incident) => {
          this.selectedIncident = incident;
        }
      );

    this.route.params
      .subscribe(
        (params: Params) => {
          this.selectedFolder = params['folderId'];
        }
      );
  }

}
