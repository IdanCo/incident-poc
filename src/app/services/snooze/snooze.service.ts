import { Injectable } from '@angular/core';
import {SnoozeData} from './snooze-data.model';
import {Incident} from '../incident/incident.model';
import {FakendService} from "../fakend/fakend.service";

@Injectable()
export class SnoozeService {

  constructor(private fakendService: FakendService ) { }

  getSnoozeByIncident(incident: Incident) {
    // IRL: return this.http...
    return this.fakendService.getSnoozeByIncident(incident);
  }

}
