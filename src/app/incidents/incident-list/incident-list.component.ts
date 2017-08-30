import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IncidentService} from '../incident.service';
import {Incident} from '../incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnChanges {
  incidents: Incident[];
  @Input() folderId: string;

  constructor(private incidentService: IncidentService) { }

  ngOnChanges(changes: SimpleChanges) {
    const currentFolder = changes.folderId.currentValue;
    this.incidents = this.incidentService.getIncidentsByFolder(currentFolder);
  }

}
