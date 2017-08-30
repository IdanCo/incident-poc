import {EventEmitter, Injectable} from '@angular/core';
import {Incident} from './incident.model';

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

  constructor() { }

  getAllIncidents() {
    return this.incidents;
  }

  getIncidentsByFolder(folderId) {
    return this.incidents.filter(incident => incident.folder === folderId );
  }

  setSelectedIncident(incident: Incident) {
    this.incidentSelected.emit(incident);
  }

}
