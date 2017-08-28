import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../incident.service';
import {Incident} from '../incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  incidents: Incident[];

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidents = this.incidentService.getAllIncidents();
  }

}
