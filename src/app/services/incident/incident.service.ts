import {EventEmitter, Injectable} from '@angular/core';
import {Incident} from './incident.model';
import {FakendService} from "../fakend/fakend.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IncidentService {
  incidentSelected = new EventEmitter<Incident>();

  constructor(private fakendService: FakendService ) { }

  getIncidentsByFolder(folderId) {
    // IRL: return this.http...
    return this.fakendService.getIncidentsByFolder(folderId);
  }

  getLiveIncidentsFeed(): Observable<Incident> {
    return this.fakendService.getLiveIncidentFeed();
  }

  setSelectedIncident(incident: Incident) {
    this.incidentSelected.emit(incident);
  }

}
