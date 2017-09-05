import {EventEmitter, Injectable} from '@angular/core';
import {Incident} from './incident.model';
import {FakeBackendService} from "../fake-backend/fake-backend.service";

@Injectable()
export class IncidentService {
  incidentSelected = new EventEmitter<Incident>();

  private incidents: Incident[] = [
    {
      title: 'my first incident',
      description: 'this is a description',
      id: '1',
      folder: 'active'
    }, {
      title: 'another incident',
      description: 'this is a description',
      id: '2',
      folder: 'snoozed'
    }, {
      title: 'my third incident',
      description: 'this is a description',
      id: '3',
      folder: 'active'
    }, {
      title: 'new incident',
      description: 'this is a description',
      id: '4',
      folder: 'snoozed'
    }
  ];

  constructor(private fakeBackendService: FakeBackendService ) { }

  getAllIncidents() {
    return this.incidents;
  }

  getIncidentsFeed() {
    return this.fakeBackendService.incidentFeed;
  }

  getIncidentsByFolder(folderId) {
    this.fakeBackendService.getIncidentsByFolder(folderId);
  }

  setSelectedIncident(incident: Incident) {
    this.incidentSelected.emit(incident);
  }

  updateIncident() {
      this.incidents[0].title = 'wow';
  }

}
