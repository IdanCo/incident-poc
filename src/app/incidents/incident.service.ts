import {EventEmitter, Injectable} from '@angular/core';
import {Incident} from './incident.model';

@Injectable()
export class IncidentService {
  incidentSelected = new EventEmitter<Incident>();

  private incidents: Incident[] = [
    {
      title: 'my first incident',
      description: 'this is a description',
      id: '1'
    }, {
      title: 'another incident',
      description: 'this is a description',
      id: '2'
    }
  ];

  constructor() { }

  getAllIncidents() {
    return this.incidents;
  }

  setSelectedIncident(incident: Incident) {
    this.incidentSelected.emit(incident);
  }

}
