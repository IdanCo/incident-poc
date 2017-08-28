import { Injectable } from '@angular/core';
import {SnoozeData} from './snooze-data.model';
import {Incident} from '../incidents/incident.model';

@Injectable()
export class SnoozeService {
  private snoozeData: SnoozeData[] = [
    {
      incidentId: '1',
      snoozed: false
    },
    {
      incidentId: '2',
      snoozed: true
    }
  ];

  constructor() { }

  getSnoozeData(incident: Incident) {
    return this.snoozeData.find(el => el.incidentId === incident.id);
  }
}
