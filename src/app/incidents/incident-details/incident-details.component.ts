import {Component, Input, OnInit} from '@angular/core';
import {Incident} from '../incident.model';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {
  @Input() incident: Incident;

  constructor() { }

  ngOnInit() {
  }

}
