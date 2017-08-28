import { Component, OnInit } from '@angular/core';
import {IncidentService} from './incident.service';
import {Incident} from './incident.model';
import {SnoozeService} from '../snooze/snooze.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  providers: [IncidentService, SnoozeService]
})
export class IncidentsComponent implements OnInit {
  selectedIncident: Incident;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.incidentSelected
      .subscribe(
        (incident: Incident) => {
          this.selectedIncident = incident;
        }
      );
  }

}
