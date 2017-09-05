import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import IncidentList from './incident-list';
import {Incident} from "../incidents/incident.model";

@Injectable()
export class FakeBackendService {
  incidentFeed = new Subject<Incident[]>();

  getIncidentsByFolder(folderId) {
    this.incidentFeed.next(
        IncidentList.filter(incident => incident.folder === folderId)
    );
  }

  constructor() {
    console.info(IncidentList);
  }

}
