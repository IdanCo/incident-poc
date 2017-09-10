import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import Incidents from './incidents';
import Snoozes from './snoozes';
import {Incident} from "../incident/incident.model";
import {Observable} from "rxjs/Observable";
import {SnoozeData} from "../snooze/snooze-data.model";

const DELAY: number = 500;

@Injectable()
export class FakendService {
  private liveIncidentFeed = new Subject<Incident>();
  private newIncidentId = 1000;
  errorMode: boolean = false;

  getIncidentsByFolder(folderId) {
    const incidents = new Subject<Incident[]>();
    setTimeout(() => {
      incidents.next(Incidents.filter(incident => incident.folder === folderId));
    }, DELAY);
    return incidents;
  }

  getLiveIncidentFeed(): Observable<Incident> {
    return this.liveIncidentFeed.asObservable();
  }

  getSnoozeByIncident(incident: Incident) {
    const snooze = new Subject<SnoozeData>();
    setTimeout(() => {
      snooze.next(Snoozes.find(snooze => snooze.incidentId === incident.id));
    }, DELAY);
    return snooze;
  }

  toggleSnooze(incident: Incident) {
    const toggleSnooze = new Subject<Incident>();

    const incidentIndex = Incidents.findIndex(x => x.id === incident.id );
    const snoozeIndex = Snoozes.findIndex(x => x.incidentId === incident.id );

    setTimeout(() => {
      if (this.errorMode) {
        console.info('backedn error');
        toggleSnooze.error('something went wrong');
      } else {
        console.info('no no no backedn error');

        Incidents[incidentIndex].folder = Incidents[incidentIndex].folder === 'active' ? 'snoozed' : 'active';
        Snoozes[snoozeIndex].snoozed = !Snoozes[snoozeIndex].snoozed;
        this.liveIncidentFeed.next(Incidents[incidentIndex]);
        toggleSnooze.next(Incidents[incidentIndex]);
      }
    }, DELAY);

    return toggleSnooze;
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
