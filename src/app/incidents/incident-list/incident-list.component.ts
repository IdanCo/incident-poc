import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IncidentService} from '../../services/incident/incident.service';
import {Incident} from '../../services/incident/incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnChanges, OnInit {
  // incidents: Incident[];
  @Input() folderId: string;
  @Input() incidents: Incident[];

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    // this.incidentService.getIncidentsFeed()
    //   .subscribe(incidents => this.incidents = incidents);
    // this.incidentService.getIncidentsByFolder(this.folderId);
  }

  ngOnChanges(changes: SimpleChanges) {
    // const currentFolder = changes.folderId.currentValue;
    // this.incidentService.getIncidentsByFolder(currentFolder);
  }

}
