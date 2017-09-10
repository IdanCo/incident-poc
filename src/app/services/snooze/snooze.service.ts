import { Injectable } from '@angular/core';
import {SnoozeData} from './snooze-data.model';
import {Incident} from '../incident/incident.model';
import {FakendService} from "../fakend/fakend.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SnoozeService {

  constructor(private fakendService: FakendService ) { }

  getSnoozeByIncident(incident: Incident): Observable<SnoozeData> {
    // IRL: return this.http...
    return this.fakendService.getSnoozeByIncident(incident);
  }

  toggleSnooze(incident: Incident): Observable<Incident> {
    const optimisticIncident: Incident = {
      title: incident.title,
      id: incident.id,
      description: incident.description,
      folder: incident.folder === 'active' ? 'snoozed' : 'active'
    };
    const toggleSnooze = new BehaviorSubject(optimisticIncident);

    this.fakendService.toggleSnooze(incident)
      .subscribe(
        (incident) => toggleSnooze.complete(),
        (error) => toggleSnooze.error(incident)
      );

    return toggleSnooze;
  }

}
