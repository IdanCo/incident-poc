import {Component, Input, OnInit} from '@angular/core';
import {Incident} from "../../../services/incident/incident.model";
import {IncidentService} from "../../../services/incident/incident.service";

@Component({
  selector: 'app-incident-item',
  templateUrl: './incident-item.component.html',
  styleUrls: ['./incident-item.component.css']
})
export class IncidentItemComponent implements OnInit {
  @Input() incident: Incident;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
  }

  selectIncident() {
    // this.incidentService.setSelectedIncident(this.incident);
    // this.incidentService.updateIncident();
  }

}
