import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import Incidents from './incidents';
import Snoozes from './snoozes';
import {Incident} from "../incident/incident.model";
import {Observable} from "rxjs/Observable";
import {SnoozeData} from "../snooze/snooze-data.model";

@Injectable()
export class FakendService {
  private liveIncidentFeed = new Subject<Incident>();
  private newIncidentId = 1000;

  getIncidentsByFolder(folderId) {
    const incidents = new Subject<Incident[]>();
    setTimeout(() => {
      incidents.next(Incidents.filter(incident => incident.folder === folderId));
    }, 1000);
    return incidents;
  }

  getLiveIncidentFeed(): Observable<Incident> {
    return this.liveIncidentFeed.asObservable();
  }

  getSnoozeByIncident(incident: Incident) {
    const snooze = new Subject<SnoozeData>();
    setTimeout(() => {
      snooze.next(Snoozes.find(snooze => snooze.incidentId === incident.id));
    }, 1000);
    return snooze;
  }

  pushNewIncident() {
    const newIncident: Incident = {
      id: `${this.newIncidentId}`,
      title: 'Random Incident # ' + this.newIncidentId,
      description: 'Random description Random description Random description Random description Random description ',
      folder: Math.random() >= 0.5 ? 'snoozed' : 'active'
    };

    const newSnooze: SnoozeData = {
      incidentId: newIncident.id,
      snoozed: newIncident.folder === 'snoozed'
    };

    this.newIncidentId++;
    Incidents.unshift(newIncident);
    Snoozes.unshift(newSnooze);
    this.liveIncidentFeed.next(newIncident);
  }

  constructor() {
  }

}
